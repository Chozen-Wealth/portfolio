import { useState } from 'react'
import './App.css'
import Nav from './components/nav/nav'
import SideLeft from './components/sideleft/sideleft'
import Section from './components/section/section'
import SideRight from './components/sideright/sideright'
import NavSecond from './components/navSecond/navSecond'
import data from "./components/section/data.json"

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState("Tout")
  const itemsFiltres = active === "Tout" ? data : data.filter(cat => cat.categorie === active)

  return (
    <div className='App'>
      <div className='AppLeft'>
        <Nav/>
        <NavSecond/>
        <div className='MainSection'>
          <SideLeft filtre={active} setFiltre={setActive}/>
          <Section categorieFiltre={itemsFiltres} />
        </div>
      </div>
      <div className='AppRight'>
        <SideRight/>
      </div>
    </div>
  )
}

export default App
