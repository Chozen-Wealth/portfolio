import { useState } from 'react'
import './sideleft.css'
import data from '../section/data.json'

const portfolio = ["Tout", "Vitrine", "E-commerce", "Jeux", "Applications", "Plateformes"]

export default function SideLeft() {
    
    const [active, setActive] = useState("Tout")

    const categories = Array.from(new Set(data.map(item => item.categorie)))
    return(
        <div className='SideLeft'>
            <ul className='filter'>
                <li className={`filter-element ${active === "Tout" ? "active" : ""}`} onClick={()=> setActive("Tout")} >Tout<span className='numberBubble'>{data.length}</span></li>
                {categories.map(categorie => {
                    const count = data.filter(item => item.categorie === categorie).length
                    const label = categorie.charAt(0).toUpperCase() + categorie.slice(1)
                    return(
                        <li key={categorie} className={`filter-element ${active === label ? "active" : ""}`} onClick={()=> setActive(label)} >{label}<span className='numberBubble'>{count}</span></li>
                    )
                })}
            </ul>
        </div>
    )
}