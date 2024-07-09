import bg from '../assets/images/bg.webp'
import MapPinIcon from '../assets/icons/MapPinIcon'
import { redirectTo } from '../utils'

function HoraLugar() {
    return (
        <section className='h-screen bg-cover bg-center relative overflow-hidden flex justify-center items-center flex-col p-4 gap-6' style={{ backgroundImage: `url(${bg})` }}>
            <section className='flex flex-col gap-2'>
                <section className='flex items-center gap-2'>
                    <p className='font-sukar text-primary text-3xl/loose font-bold border-y border-secondary'>SÁBADO</p>
                    <p className='font-sukar text-secondary text-5xl font-bold'>03</p>
                    <p className='font-sukar text-primary text-3xl/loose font-bold border-y border-secondary'>AGOSTO</p>
                </section>
                <p className='font-sukar text-secondary text-3xl font-bold text-center'>12HS a 18HS</p>
            </section>
            <section className='flex items-center gap-4'>
                <MapPinIcon color='#594840' size='size-8'/>
                <p className='font-sukar text-primary text-xl font-bold'>QUIINDY — COSTA GAONA</p>
            </section>
            <button onClick={() => redirectTo('https://maps.app.goo.gl/MiVg78G43iX6sCoT9')} className='bg-primary w-4/5 px-2 py-4 rounded-lg font-sukar text-white text-xl'>VER UBICACIÓN</button>
        </section>
    )
}

export default HoraLugar