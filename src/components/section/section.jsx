import './section.css'
import data from "./data.json"

export default function Section() {
    console.log(data[0].image)
    return(
        <section className='section'>
            <div className='sectionFiltres'>
                <span>Tout</span>
                <span>trié par:</span>
                <span>Plus récents<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
            </div>
            <div className='allGames'>
                {data.map((element, index) => (   
                    <div className='game' key={index}>
                        <div className='gamePicture'>
                            <img className='gamePictureIn' src={element.image} alt="" />
                        </div>
                        <div className='gameInfos'>
                            <span className='gameName'>{element.title}</span>
                            <span className='gameDescription'>{element.categorie}</span>
                        </div>
                    </div>
                ))}
                {/* <div className='game'>
                    <div className='gamePicture'>
                        <img className='gamePictureIn' src="../../../public/world-of-warcraft.jpg" alt="" />
                    </div>
                    <div className='gameInfos'>
                        <span className='gameName'>WOW : The War Within</span>
                        <span className='gameDescription'>Massively Multiplayer RPG</span>
                    </div>
                </div>
                <div className='game'>
                    <div className='gamePicture'>
                        <img className='gamePictureIn' src="../../../public/warzone.jpeg" alt="" />
                    </div>
                    <div className='gameInfos'>
                        <span className='gameName'>Warzone</span>
                        <span className='gameDescription'>Action Shooter</span>
                    </div>
                </div>
                <div className='game'>
                    <div className='gamePicture'>
                        <img className='gamePictureIn' src="../../../public/overwatch.jpg" alt="" />
                    </div>
                    <div className='gameInfos'>
                        <span className='gameName'>Overwatch</span>
                        <span className='gameDescription'>Team-Based Action</span>
                    </div>
                </div>
                <div className='game'>
                    <div className='gamePicture'>
                        <img className='gamePictureIn' src="../../../public/wow-classic.jpg" alt="" />
                    </div>
                    <div className='gameInfos'>
                        <span className='gameName'>WOW : Classic</span>
                        <span className='gameDescription'>Massively Multiplayer RPG</span>
                    </div>
                </div>
                <div className='game'>
                    <div className='gamePicture'>
                        <img className='gamePictureIn' src="../../../public/hearthstone.jpg" alt="" />
                    </div>
                    <div className='gameInfos'>
                        <span className='gameName'>Hearthstone</span>
                        <span className='gameDescription'>Strategy Card Game</span>
                    </div>
                </div>
                <div className='game'>
                    <div className='gamePicture'>
                        <img className='gamePictureIn' src="../../../public/diablo-immo.jpeg" alt="" />
                    </div>
                    <div className='gameInfos'>
                        <span className='gameName'>Diablo Immortal</span>
                        <span className='gameDescription'>Action RGP</span>
                    </div>
                </div> */}
            </div>
        </section>
    )
}