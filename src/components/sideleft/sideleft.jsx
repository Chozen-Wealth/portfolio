import './sideleft.css'

export default function SideLeft() {
    return(
        <div className='SideLeft'>
            <ul className='filter'>
                <li className='filter-element active'>Tout<span className='numberBubble'>19</span></li>
                <li className='filter-element'>Landing page<span className='numberBubble'>13</span></li>
                <li className='filter-element'>E-commerce<span className='numberBubble'>6</span></li>
                <li className='filter-element'>Jeux<span className='numberBubble'>7</span></li>
                <li className='filter-element'>Applications<span className='numberBubble'>2</span></li>
                <li className='filter-element'>Plateformes<span className='numberBubble'>9</span></li>
            </ul>
            <hr />
        </div>
    )
}