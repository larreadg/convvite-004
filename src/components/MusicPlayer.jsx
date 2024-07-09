import { useEffect, useRef, useState } from 'react'
import bg from '../assets/images/bg.webp'
import musicFile from '../assets/musics/PrimeraCita.mp3'
import PlayIcon from '../assets/icons/PlayIcon'
import PauseIcon from '../assets/icons/PauseIcon'

function MusicPlayer() {

    const audioRef = useRef(null)
    const [progress, setProgress] = useState(0)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        const audio = audioRef.current;

        const updateProgress = () => {
            if (audio) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        if (audio) {
            audio.addEventListener('timeupdate', updateProgress);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, [])

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play()
            setPlaying(true)
        }
    }

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            setPlaying(false)
        }
    }

    return (
        <section className='px-2 py-4 w-3/4 bg-primary bg-cover bg-center shadow-lg rounded-lg flex items-center gap-4' style={{ backgroundImage: `url(${bg})` }}>
            <audio ref={audioRef} src={musicFile}></audio>
            {playing ? <button onClick={handlePause} className='p-2'><PauseIcon/></button>:<button onClick={handlePlay} className='p-2'><PlayIcon/></button>}
            <section className='flex flex-col w-full gap-2'>
                <section>
                    <p className='font-bold font-sukar text-white'>Primera Cita</p>
                    <p className='font-sukar text-white'>Carin León</p>
                </section>
                <div className='w-full bg-gray-200 rounded-full h-1.5'>
                    <div className='bg-secondary h-1.5 rounded-full' style={{ width: `${progress}%` }}></div>
                </div>
            </section>
        </section>
    )
}
  
export default MusicPlayer