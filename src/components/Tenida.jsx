import bg from '../assets/images/bg.webp'
import flower1 from '../assets/images/flower1.webp'
import { redirectTo } from '../utils'

function Tenida() {
    return (
        <section className='bg-primary h-screen bg-cover bg-center relative overflow-hidden flex justify-center items-center flex-col p-4 gap-4' style={{ backgroundImage: `url(${bg})` }}>
            <img src={flower1} alt='Flower 1' className='w-56 h-56 absolute -top-8 -right-16'/>
            <p className='font-sukar text-white text-2xl font-bold'>TENIDA</p>
            <h1 translate='no' className='font-howell text-7xl text-white text-center'>Country</h1>
            <button onClick={() => redirectTo('https://www.pinterest.es/search/pins/?rs=typed&q=womans%20country%20outfits')} className='bg-primary w-4/5 px-2 py-4 rounded-lg font-sukar text-white text-xl'>MUJERES</button>
            <button onClick={() => redirectTo('https://www.pinterest.es/search/pins/?rs=typed&q=mens%20country%20outfits')} className='border-2 w-4/5 px-2 py-4 rounded-lg font-sukar text-white text-xl'>HOMBRES</button>
        </section>
    )
  }
  
  export default Tenida