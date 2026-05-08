import React, { useState } from 'react'
import '../../assets/Styles/cart.css'

const Cart = () => {

  // ✅ Read cart from localStorage
  let [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  let [count, setCount] = useState(1)

  // ✅ Remove from localStorage + state
  let handleRemove = (id) => {
    let updated = products.filter(item => item.id !== id)
    setProducts(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  let addcount = () => { setCount(count + 1) }
  let subcount = () => { if (count > 1) setCount(count - 1) }

  return (
    <>
      <div className="carts">
        {products.length > 0 ? (
          products.map((elem, index) => {
            let { id, image, description, name, price } = elem
            return (
              <div className="box" key={id}>
                <div className="img">
                  <img src={image} alt={name} width="80" />
                </div>
                <div className="details">
                  <div className="desc">
                    <h2>{name}</h2>
                    <p>{description}</p>
                  </div>
                  <div className="actions">
                    <button onClick={() => handleRemove(id)}>
                      Remove
                    </button>
                    <div className="counts">
                      <div className="add">
                        <button onClick={addcount}>+</button>
                      </div>
                      <div className="num">
                        {count}
                      </div>
                      <div className="sub">
                        <button onClick={subcount}>-</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h4>₹ {price}/-</h4>
                </div>
              </div>
            )
          })
        ) : (
          <p>Your Cart Is Empty</p>
        )}
      </div>
    </>
  )
}

export default Cart