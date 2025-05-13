import { useState } from 'react'
import './sideleft.css'
import data from '../section/data.json'

const portfolio = ["Tout", "Landing page", "E-commerce", "Jeux", "Applications", "Plateformes"]

export default function SideLeft() {
    
    const [active, setActive] = useState("Tout")
    return(
        <div className='SideLeft'>
            <ul className='filter'>
                {portfolio.map(element => (
                    <li onClick={()=> {setActive(element)}} className={`filter-element ${active == element ? "active" : ""}`}>{element}<span className='numberBubble'>{data.length}</span></li>
                ))}
            </ul>
        </div>
    )
}