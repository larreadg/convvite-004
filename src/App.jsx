import { useLocation } from 'react-router-dom'
import Asistencia from './components/Asistencia'
import HoraLugar from './components/HoraLugar'
import Mensaje from './components/Mensaje'
import Portada from './components/Portada'
import Regalo from './components/Regalo'
import Tenida from './components/Tenida'

function App() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const invitadoKey = queryParams.get('key');

  let jsonData = null
  try {
    jsonData = JSON.parse(decodeURIComponent(escape(atob(invitadoKey))));
  } catch(e){
    jsonData = {
      i : '',
      a : 0,
      j : 0
    };
  }

  return (
    <>
      <Portada/>
      <Mensaje/>
      <HoraLugar/>
      <Tenida/>
      <Regalo/>
      {jsonData.i !== '' &&
        <Asistencia invitado={jsonData.i} adultos={jsonData.a} jovenes={jsonData.j}/>
      }
    </>
  )
}

export default App
