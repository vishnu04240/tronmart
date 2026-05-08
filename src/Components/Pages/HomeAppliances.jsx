import React, { useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import { useNavigate } from 'react-router-dom'
import jsonData from '../../jsondata/data.json'

const HomeAppliances = () => {
  let [products] = useState(jsonData.products)
  let [price, setPrice] = useState(100000)
  let navigate = useNavigate()

  let filterdData = products.filter((elem) => {
    return elem.category === 'home appliances' && elem.price <= price
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
            <h1>Home Appliances</h1>
            <p>Showing products under Rs. {price}</p><br />
            <p>Our home appliances are designed to make everyday living easier, smarter, and more efficient. From powerful washing machines that provide deep cleaning and fabric care to reliable cookers that ensure fast and even cooking, each appliance is built for performance and durability.</p>
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
export default HomeAppliances