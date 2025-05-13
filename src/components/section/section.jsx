import './section.css'
import data from "./data.json"

export default function Section() {
    return(
        <section className='section'>
            <div className='sectionFiltres'>
                <span>Tout</span>
                <span>trié par:</span>
                <span>Plus récents<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
            </div>
            <div className='allGames'>
                {data.map(element => (   
                    <div className='game' key={element.title}>
                        <div className='gamePicture'>
                            <img className='gamePictureIn' src={element.image} alt="" />
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