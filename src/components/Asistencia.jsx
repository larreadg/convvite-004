import { useEffect, useState } from 'react'
import bg from '../assets/images/bg.webp'
import flower1 from '../assets/images/flower1.webp'
import PropTypes from 'prop-types'
import { msgAsistenciaNo, msgAsistenciaSi, urlPlanilla } from '../constants'
import Loader from './Loader'
import { PlusIcon } from '../assets/icons/PlusIcon'
import { MinusIcon } from '../assets/icons/MinusIcon'

function Asistencia({ jovenes, adultos, invitado }) {

    const [confirmacion, setConfirmacion] = useState(0)
    const [loading, setLoading] = useState(false)
    const [invitados, setInvitados] = useState(Number(adultos))

    const reducirInvitados = () => {
        if(invitados > 1){
            setInvitados(invitados - 1)
        }
    }
    
    const aumentarInvitados = () => {
        if(invitados < adultos){
            setInvitados(invitados + 1)
        }
    }

    useEffect(() => {

        const fetchConfirmacion = async () => {
            try {

                const response = await fetch(`${urlPlanilla}?Persona=${invitado}`)
                const result = await response.json()
                const { data } = result
                if (data) {
                    setConfirmacion(data.Asistencia === 'Sí, asistiré' ? 1 : 2)
                }
            } catch (error) {
                console.error('Hubo un problema al obtener la confirmación: ' + error.message)
            }
        }
        fetchConfirmacion()

    }, [invitado, adultos])

    const handleAsistenciaClick = async (respuesta) => {
        const msg = respuesta === 'SI' ? msgAsistenciaSi.replace('$cantidad', invitados) : msgAsistenciaNo
        const confirmed = window.confirm(msg)
        if (confirmed) {
            try {
                setLoading(true)
                const body = new FormData()
                body.append('Persona', invitado)
                body.append('Asistencia', respuesta === 'SI' ? 'Sí, asistiré' : 'No asistiré')
                body.append('Jovenes', jovenes)
                body.append('Adultos', invitados)

                const response = await fetch(urlPlanilla, {
                    method: 'POST',
                    body,
                })

                if (!response.ok) {
                    throw new Error('Error en la solicitud')
                }

                setConfirmacion(respuesta === 'SI' ? 1 : 2)

                setLoading(false)

            } catch (error) {
                alert('Hubo un problema al enviar la confirmación: ' + error.message)
            }
        }
    }

    return (
        <section className='bg-primary h-screen bg-cover bg-center relative overflow-hidden flex justify-center items-center flex-col p-4 gap-4' style={{ backgroundImage: `url(${bg})` }}>
            {loading && <Loader />}
            <img src={flower1} alt='Flower 1' className='w-56 h-56 absolute -top-8 -right-16' />
            <p className='font-sukar text-white text-2xl font-bold'>ASISTENCIA</p>
            <h1 className='font-howell text-7xl text-white text-center'>{invitado}</h1>

            {confirmacion === 1 && (
                <p className='font-sukar text-2xl font-bold text-secondary'>ASISTENCIA CONFIRMADA</p>
            )}
            {confirmacion === 2 && (
                <p className='font-sukar text-2xl font-bold text-secondary'>NO ASISTIRÁS</p>
            )}

            {confirmacion === 0 && (
                <>
                    {adultos > 0 && (
                        <p className='font-sukar text-2xl font-bold text-secondary'>VÁLIDO PARA {adultos} INVITADO(S)</p>
                    )}
                    <p className='text-center font-sukar text-2xl text-white'>POR FAVOR, CONFIRMAR ANTES DEL <b>20 DE JULIO</b></p>
                    
                    <section className='flex items-center gap-2 w-4/5'>
                        <section className='flex items-center gap-4'>
                            <button className='w-10 h-10 bg-secondary flex justify-center items-center rounded-lg' onClick={() => reducirInvitados()}>
                                <MinusIcon/>
                            </button>
                            <p className='font-sukar text-2xl font-bold text-secondary'>{invitados}</p>
                            <button className='w-10 h-10 bg-secondary flex justify-center items-center rounded-lg' onClick={() => aumentarInvitados()}>
                                <PlusIcon />
                            </button>
                            
                        </section>
                        <button onClick={() => handleAsistenciaClick('SI')} className='bg-primary p-4 rounded-lg font-sukar text-white text-xl w-full'>SÍ, ASISTIRÉ</button>
                    </section>
                    <button onClick={() => handleAsistenciaClick('NO')} className='border-2 w-4/5 px-2 py-4 rounded-lg font-sukar text-white text-xl'>NO PODRÉ ASISTIR</button>
                </>
            )}
        </section>
    )
}

Asistencia.propTypes = {
    invitado: PropTypes.string.isRequired,
    jovenes: PropTypes.any.isRequired,
    adultos: PropTypes.any.isRequired,
}

export default Asistencia