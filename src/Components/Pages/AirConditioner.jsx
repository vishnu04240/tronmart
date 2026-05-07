import React, { useEffect, useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import { useNavigate } from 'react-router-dom'

const AirConditioner = () => {
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
        return elem.category === 'air conditioner' && elem.price <= price
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
             <h1>Air Conditioners</h1>
             <p>Showing products under Rs. {price}</p><br />
             <p>Our air conditioners are designed to deliver powerful cooling and year-round comfort for your home or office. Equipped with advanced cooling technology, they provide fast and even temperature control while maintaining energy efficiency. Whether you need efficient cooling for a small room or a powerful solution for larger spaces, our air conditioners combine performance, reliability, and style to meet your needs.</p>
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

export default AirConditioner
