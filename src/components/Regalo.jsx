import bg from '../assets/images/bg.webp'
import flower3 from '../assets/images/flower3.webp'
import dividerBottom from '../assets/images/dividerBottom.webp'

function Regalo() {
    return (
        <section className='h-screen bg-cover bg-center relative overflow-hidden flex justify-center items-center flex-col p-4 gap-4' style={{ backgroundImage: `url(${bg})` }}>
            <img src={flower3} alt='Flower 1' className='w-56 h-56 absolute -top-8 -left-20'/>
            <p className='text-center font-sukar text-secondary text-2xl font-bold'>SUGERENCIA DE REGALO</p>
           <p className='text-center font-sukar text-primary text-xl'>Tu presencia es nuestro mayor regalo, pero si quieres tener un detalle con nosotros, preferimos sus muestras de afecto en nuestra cuenta bancaria.</p>
           <img src={dividerBottom} alt='Divider' className='w-3/4 h-auto absolute -bottom-0'/>
           <section className='p-4 w-3/4 bg-primary bg-cover bg-center shadow-lg rounded-lg flex flex-col gap-2' style={{ backgroundImage: `url(${bg})` }}>
                <p className='font-sukar text-white text-xl'>Banco: Interfisa</p>
                <p className='font-sukar text-white text-xl'>Nro. cuenta: 10300552</p>
                <p className='font-sukar text-white text-xl'>Mónica Aidé Barrios Recalde</p>
                <p className='font-sukar text-white text-xl'>CI: 3839955</p>
           </section>
        </section>
    )
  }
  
  export default Regalo