import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/Styles/navbar.css'

const Navbar = () => {
  let [input , setInput] = useState('')
  let handleInput = (e) => {
    let str = e.target.value
    setInput(str.toLowerCase())
  }
  console.log(input)
  
  return (
    <>
      <div className="navbar">
        <div className="portion1">
            <NavLink to={'/'}>
            <div className="logo">
                <img src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-logo.svg" alt="" />
            </div>
            </NavLink>
            <div className="contact">
                <p>Contact us : 0001-123-321</p>
            </div>
        </div>
        
        <div className="portion2">
            <ul>
            <li><NavLink to={'allproducts'}>All Products</NavLink></li>
            <li><NavLink to = {'/homeappliances'}>Home Appliances</NavLink></li>
            <li><NavLink to={'/audiovideo'}>Audio & Video</NavLink></li>
            <li><NavLink to={'/refrigrator'}>Refrigrator</NavLink></li>
             <li><NavLink to={'/cart'}>Cart</NavLink></li> 
        </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
