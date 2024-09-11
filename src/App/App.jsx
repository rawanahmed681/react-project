import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
export default function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
    </div>
  )
}
