import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../assets/Styles/viewmore.css'

const ViewMore = () => {
    let params = useParams()
     let [products , setProducts] = useState({}) 
     let productId = params.id
     let fetchApi = async () =>{
        let resp = await fetch(`http://localhost:4000/products/${productId}`)
        let apidata = await resp.json()
            setProducts(apidata)
        }
        useEffect(()=>{
            fetchApi()
        },[])
        // console.log(products)
    const { id ,name, description, brand, price, rating, image } = products

    let addtoCart =()=>{  
      // let res = await fetch('http://localhost:4000/cartitems')
      // let cartItems = await res.json()
      // let exists = cartItems.find(item => item.id === products.id)
      // if (exists) {
      //   alert("Already in cart")
      //   return
      // }       
      let bool = window.confirm(`Do you want to add this product to cart`)
      if(bool){
        fetch(`http://localhost:4000/cartitems`,{
          method : 'POST',
          headers : {'content-type' : 'application/json'},
          body : JSON.stringify(products)
        })
        alert("product is added")
      }
      else{
        alert("product is not added")
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
