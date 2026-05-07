import React, { useEffect, useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import { useNavigate } from 'react-router-dom'

const PcLaptop = () => {
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
            return elem.category === 'computer' && elem.price <= price
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
             <h1>PC's And Laptop</h1>
             <p>Showing products under Rs. {price}</p><br />
             <p>PCs and laptops are powerful computing devices designed to meet both personal and professional needs. From high-performance desktops built for gaming, design, and office work to lightweight laptops ideal for portability and productivity, these devices deliver speed, reliability, and versatility. Equipped with advanced processors, ample storage, and modern graphics capabilities, PCs and laptops support multitasking, online learning, entertainment, and business operations with ease.</p>
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

export default PcLaptop
