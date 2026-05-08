import React, { useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import { useNavigate } from 'react-router-dom'
import jsonData from '../../jsondata/data.json'

const PcLaptop = () => {
  let [products] = useState(jsonData.products)
  let [price, setPrice] = useState(100000)
  let navigate = useNavigate()

  let filterdData = products.filter((elem) => {
    return elem.category === 'computer' && elem.price <= price
  })

  let ViewMore = (id) => { navigate(`/viewmore/${id}`) }

  return (
    <>
      <div className="container">
        <div className="leftnav">
          <LeftNavbar price={price} setPrice={setPrice} />
        </div>
        <div className="content">
          <div className="heading">
            <h1>PC's And Laptop</h1>
            <p>Showing products under Rs. {price}</p><br />
            <p>PCs and laptops are powerful computing devices designed to meet both personal and professional needs. From high-performance desktops built for gaming, design, and office work to lightweight laptops ideal for portability and productivity, these devices deliver speed, reliability, and versatility.</p>
          </div>
          <br />
          {filterdData.map((elem, index) => {
            let { id, name, brand, price, image, description, rating } = elem
            return (
              <div className="cards" key={index}>
                <div className="card" onClick={() => ViewMore(id)}>
                  <h2>{name}</h2>
                  <div className="image"><img src={image} alt={name} /></div>
                  <h3>{brand}</h3>
                  <p>{description}</p>
                  <div className="pri_rat">
                    <p>Rating : ⭐ {rating}</p>
                    <p>Price: ₹{price}/-</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default PcLaptop