import React, { useEffect, useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import { useNavigate } from 'react-router-dom'

const Refrigrator = () => {
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
    return elem.category === 'refrigerator' && elem.price <= price
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
             <h1>Refrigerator</h1>
             <p>Showing products under Rs. {price}</p><br />
             <p>Our refrigerators are designed to keep your food fresh, organized, and hygienic every day. Built with advanced cooling technology, they ensure even temperature distribution for longer-lasting freshness of fruits, vegetables, and groceries. With spacious storage, energy-efficient performance, and modern designs, our fridges combine convenience with style. Whether you need quick cooling, powerful freezing, or smart storage solutions, our refrigerators are a perfect fit for every home and lifestyle.</p>
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

export default Refrigrator
