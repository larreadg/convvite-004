import bg from '../assets/images/bg.webp'
import flower1 from '../assets/images/flower1.webp'

function NoNinhos() {
    return (
        <section className='h-screen bg-cover bg-center relative overflow-hidden flex justify-center items-center flex-col p-4 gap-4' style={{ backgroundImage: `url(${bg})` }}>
            <img src={flower1} alt='Flower 1' className='w-56 h-56 absolute -top-8 -right-16'/>
            <p className='text-center font-sukar text-secondary text-2xl font-bold'>NO NIÑOS</p>
           <p className='text-center font-sukar text-primary text-xl'>Amamos a sus pequeños, pero queremos que en este día sólo tengan que preocuparse por pasarla increíble.</p>
        </section>
    )
  }
  
  export default NoNinhos