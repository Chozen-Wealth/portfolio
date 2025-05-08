import './sideleft.css'

export default function SideLeft() {
    return(
        <div className='SideLeft'>
            <ul className='filter'>
                <li className='filter-element active'>All Games <span className='numberBubble'>19</span></li>
                <li className='filter-element'>Blizzard <span className='numberBubble'>13</span></li>
                <li className='filter-element'>Activision <span className='numberBubble'>6</span></li>
                <li className='filter-element'>Start For Free <span className='numberBubble'>7</span></li>
                <li className='filter-element'>Mobile <span className='numberBubble'>2</span></li>
                <li className='filter-element'>MacOS <span className='numberBubble'>9</span></li>
            </ul>
            <hr />
            <ul className='filter-2'>
                <li className='filter-element'>My Games <span className='numberBubble'>7</span></li>
                <li className='filter-element'>Installed <span className='numberBubble'>6</span></li>
                <li className='filter-element'>Favorites <span className='numberBubble'>3</span></li>
            </ul>
        </div>
    )
}