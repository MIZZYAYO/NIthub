// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Portfolio from './Components/Pages/Portfolio'
import Learn from './Components/Pages/Learn'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-[#EFECE7]'>
    <Navbar/>
    
    <div>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Learn/>
    </div>

    </div>
   
  )
}

export default App
