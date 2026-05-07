import React, { useEffect, useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import { useNavigate } from 'react-router-dom'

const Gadgets = () => {
  let [products , setProducts] = useState([])
         let [price , setPrice] = useState(100000)
          let navigate = useNavigate()
        let fetchApi = async () =>{
          let resp = await fetch('http://localhost:4000/products')
          let apidata = await resp.json()
           setProducts(apidata)
        }
        useEffect(()=>{
          fetchApi()
        },[])
        // console.log(products)
      
        let filterdData = products.filter((elem)=>{
          return elem.category === 'gadgets' && elem.price <= price
        })
        // console.log(filterdData)
         let ViewMore = (id) =>{
       navigate(`/viewmore/${id}`)
  }
  return (
    <>
      <div className="container">
        <div className="leftnav">
          <LeftNavbar price={price} setPrice={setPrice}/>
        </div>

        <div className="content">
           <div className="heading">
             <h1>Gadgets</h1>
             <p>Showing products under Rs. {price}</p><br />
             <p>Electronics gadgets have become an essential part of modern life, making everyday tasks faster, smarter, and more convenient. From smartphones, laptops, and smart TVs to wearable devices and home automation systems, these gadgets combine advanced technology with user-friendly design.</p>
           </div>
          <br />

          {filterdData.map((elem , index) => {
            let { id, name, brand, price, image, description, rating } = elem

            return (
              <div className="cards" key={index}>
               <div className="card" onClick={()=>ViewMore(id)}>
                  <h2>{name}</h2>

                 <div className="image">
                   <img src={image} alt={name} />
                 </div>

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

export default Gadgets
