import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../assets/Styles/cart.css'
const Cart = () => {
  let [products, setProducts] = useState([])
  let fetchApi = async () => {
    let resp = await fetch(`http://localhost:4000/cartitems`)
    let apidata = await resp.json()
    setProducts(apidata)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  //  console.log(products)
  let handleRemove = async (id) => {
    await axios.delete(`http://localhost:4000/cartitems/${id}`)
    setProducts(products.filter(item => item.id !== id))
  }

  let[count,setCount]=useState(1);

  let addcount = () =>{
    setCount(count+1)
  }
  let subcount = () => {
    setCount(count-1)
  }



  return (
    <>
      <div className="carts">
        {products.length > 0 ? (
          products && products.map((elem, index) => {
            let { id, image, description, name, price } = elem
            return (
              <div className="box">
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
        ) :
          <p> Your Cart Is Empty</p>
        }

      </div>



    </>
  )

}


export default Cart