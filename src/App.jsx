import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/nav'
import SideLeft from './components/sideleft/sideleft'
import Section from './components/section/section'
import SideRight from './components/sideright/sideright'
import NavSecond from './components/navSecond/navSecond'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='AppLeft'>
        <Nav/>
        <NavSecond/>
        <div className='MainSection'>
          <SideLeft/>
          <Section/>
        </div>
      </div>
      <div className='AppRight'>
        <SideRight/>
      </div>
    </div>
  )
}

export default App
