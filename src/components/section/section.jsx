import './section.css'
import data from "./data.json"

export default function Section({categorieFiltre}) {
    return(
        <section className='section'>
            <div className='allGames'>
                {data.map((element, index) => (   
                    <div className='game' key={index}>
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