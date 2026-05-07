import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/Styles/leftnavbar.css'
const LeftNavbar = ({price, setPrice}) => {
  return (
    <>
      <div className="Lnavbar">
        
        <div className="list">
            <h2>Category</h2>
            <ul>
                <li>
                    <NavLink to={'/ac'}>Air Conditioner</NavLink>
                </li>
                <li>
                    <NavLink to={'/audiovideo'}>Audio & Video</NavLink>
                </li>
                <li>
                    <NavLink to={'/gad'}>Gadgets</NavLink>
                </li>
                <li>
                    <NavLink to={'/homeappliances'}>Home Appliances</NavLink>
                </li>
                <li>
                    <NavLink to={'/pc'}>Pc's and Laptop</NavLink>
                </li>
                <li>
                    <NavLink to={'/refrigrator'}>Refrigrator</NavLink>
                </li>
            </ul>
        </div>
        <div className="range">
            <h2>Filter By Price</h2>
            <input type="range" 
            min="0" 
            max="100000"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
             />
             <p>Up to Rs. {price}</p>
        </div>
      </div>
    </>
  )
}

export default LeftNavbar
