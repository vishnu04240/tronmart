import React, { useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import { useNavigate } from 'react-router-dom'
import jsonData from '../../jsondata/data.json'

const AudioVideo = () => {
  let [products] = useState(jsonData.products)
  let [price, setPrice] = useState(100000)
  let navigate = useNavigate()

  let filterdData = products.filter((elem) => {
    return elem.category === 'audio video' && elem.price <= price
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
            <h1>Audio & Video</h1>
            <p>Showing products under Rs. {price}</p><br />
            <p>Our audio and video products are designed to deliver an immersive and high-quality entertainment experience for your home. From powerful speakers with rich bass and clear sound to advanced televisions and media devices with stunning visuals, each product combines performance with modern design. Whether you're enjoying music, movies, or gaming, our products bring exceptional sound and picture quality to elevate your everyday entertainment.</p>
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
export default AudioVideo