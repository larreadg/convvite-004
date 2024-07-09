import bg from '../assets/images/bg.webp'
import flower1 from '../assets/images/flower1.webp'
import flower2 from '../assets/images/flower2.webp'
import MusicPlayer from './MusicPlayer'

function Portada() {
    return (
        <section className='h-screen bg-cover bg-center relative overflow-hidden flex justify-center items-center flex-col p-4 gap-8' style={{ backgroundImage: `url(${bg})` }}>
            <img src={flower1} alt='Flower 1' className='w-56 h-56 absolute -top-8 -right-16'/>
            <img src={flower2} alt='Flower 2' className='w-56 h-56 absolute -bottom-8 -left-16'/>
            <p className='font-sukar text-primary text-2xl font-bold'>¡NOS CASAMOS!</p>
            <section>
                <h1 className='font-howell text-7xl text-primary text-center leading-none'>Mónica</h1>
                <h1 className='font-howell text-7xl text-primary text-center leading-none'>&</h1>
                <h1 className='font-howell text-7xl text-primary text-center leading-none'>Miguel</h1>
            </section>
            <MusicPlayer/>
        </section>
    )
  }
  
  export default Portada