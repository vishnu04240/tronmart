import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar'
import HomeAppliances from './Components/Pages/HomeAppliances'
import AudioVideo from './Components/Pages/AudioVideo'
import Refrigrator from './Components/Pages/Refrigrator'
import AllProducts from './Components/Pages/AllProducts'
import LeftNavbar from './Components/LeftNavbar'
import Cart from './Components/Pages/Cart'
import AirConditioner from './Components/Pages/AirConditioner'
import Gadgets from './Components/Pages/Gadgets'
import PcLaptop from './Components/Pages/PcLaptop'
import ViewMore from './Components/Pages/ViewMore'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<AllProducts/>} path='/allproducts' />
        <Route element={<HomeAppliances/>} path='/homeappliances' />
        <Route element={<AudioVideo/>} path='/audiovideo' />
        <Route element={<Refrigrator/>} path='/refrigrator'/>
        <Route element={<AirConditioner/>} path='/ac'/>
        <Route element={<Gadgets/>} path='/gad'/>
        <Route element={<PcLaptop/>} path='/pc' />
        <Route element={<Cart/>} path='/cart' />
        <Route element={<ViewMore/>} path='/viewmore/:id'/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
