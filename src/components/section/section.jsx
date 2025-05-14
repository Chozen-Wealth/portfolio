import './section.css'
import data from "./data.json"
import { useEffect, useState } from 'react'

export default function Section({categorieFiltre}) {
    
    const [animate, setAnimate] = useState(false)
    
    useEffect(()=>{
        setAnimate(false)
        const timeout = setTimeout(()=>{
            setAnimate(true)
        }, 10)
        const timezout = setTimeout(()=>{
            setAnimate(false)
        }, 300)
        return() => clearTimeout(timezout)
    }, [categorieFiltre])

    return(
        <section className='section'>
            <div className='allGames'>
                {categorieFiltre.map(element => (   
                    <div className={`game ${animate === true ? "appear" : ""}`} key={element.title}>
                        <div className='gamePicture'>
                            <img className='gamePictureIn' src={element.image} alt={element.title} />
                        </div>
                        <div className='gameInfos'>
                            <span className='gameName'>{element.title}</span>
                            <span className='gameDescription'>{element.categorie}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}