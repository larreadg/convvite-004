import bg from '../assets/images/bg.webp'
import dividerBottom from '../assets/images/dividerBottom.webp'
import dividerTop from '../assets/images/dividerTop.webp'

function Mensaje() {
    return (
        <section className='bg-primary h-screen bg-cover bg-center relative overflow-hidden flex justify-center items-center flex-col p-4 gap-6' style={{ backgroundImage: `url(${bg})` }}>
           
           <p className='text-center font-sukar text-white text-2xl font-bold'>ORACIÓN POR EL MATRIMONIO</p>
           <p className='text-center font-sukar text-white text-xl'>Padre yo presento mi hogar delante de ti para que sea usted tomando el control de nuestras vidas, fortalece mi matrimonio, fortalece nuestro amor, fortalece nuestra unión Padre. Dios mío te pido que nos guardes de toda envidia, de toda trampa del enemigo, une nuestras vidas con lazos de amor, permitenos tener confianza el uno al otro, permite que en nuestras vidas exista el diálogo, la paz, la sinceridad, el amor, la amistad en el nombre de Jesús. Aleja de nosotros personas con malas intenciones, personas que nos quieran destruir, llévatelas muy lejos de nosotros en tu Santo nombre Jesús.</p>
           <img src={dividerBottom} alt='Divider' className='w-3/4 h-auto absolute -bottom-0'/>
           <img src={dividerTop} alt='Divider top' className='w-3/4 h-auto absolute -top-0'/>
        </section>
    )
}

export default Mensaje