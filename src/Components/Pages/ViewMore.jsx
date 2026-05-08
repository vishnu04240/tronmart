import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../assets/Styles/viewmore.css'
// ✅ Import directly from json
import jsonData from '../../jsondata/data.json'

const ViewMore = () => {
  let params = useParams()
  let productId = params.id

  // ✅ Find product by id from json directly
  let product = jsonData.products.find(item => item.id === productId)
  let [products] = useState(product || {})

  const { id, name, description, brand, price, rating, image } = products

  let addtoCart = () => {
    let bool = window.confirm(`Do you want to add this product to cart?`)
    if (bool) {
      // ✅ Save to localStorage
      let existingCart = JSON.parse(localStorage.getItem('cart')) || []

      // ✅ Check if already in cart
      let exists = existingCart.find(item => item.id === products.id)
      if (exists) {
        alert("Already in cart!")
        return
      }

      existingCart.push(products)
      localStorage.setItem('cart', JSON.stringify(existingCart))
      alert("Product added to cart!")
    } else {
      alert("Product not added")
    }
  }

  return (
    <>
      <div className="viewmore">
        <h1>{name}</h1>
        <div className="card">
          <div className="img">
            <img src={image} alt={name} />
          </div>
          <h2>{brand}</h2>
          <p>{description}</p>
          <div className="ratpri">
            <p>Rating: ⭐ {rating}</p>
            <p>Price: ₹{price}/-</p>
          </div>
          <button onClick={addtoCart}>Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default ViewMore