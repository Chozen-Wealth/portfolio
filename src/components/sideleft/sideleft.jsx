import { useState } from 'react'
import './sideleft.css'
// BASE DE DONNEE --------------------------
// Données d'entrée
import data from '../section/data.json'
// BASE DE DONNEE --------------------------



export default function SideLeft({filtre, setFiltre}) {


    const categories = Array.from(new Set(data.map(item => item.categorie)))
    return(
        <div className='SideLeft'>

            {/* Liste des boutons filtres */}
            <ul className='filter'>

                {/* Ici c'est le bouton qui affiche tout */}
                <li className={`filter-element ${filtre === "Tout" ? "active" : ""}`} onClick={()=> setFiltre("Tout")} >Tout<span className='numberBubble'>{data.length}</span></li>

                {/* Ici c'est tout les autres boutons qui affichent chaque catégorie*/}
                {categories.map(categorie => {
                    const count = data.filter(item => item.categorie === categorie).length
                    const label = categorie.charAt(0).toUpperCase() + categorie.slice(1)
                    return(
                        <li key={categorie} className={`filter-element ${filtre === label ? "active" : ""}`} onClick={(e)=> {setFiltre(label)}} >{label}<span className='numberBubble'>{count}</span></li>
                    )
                })}

            </ul>

        </div>
    )
}