import React, { useEffect, useState } from 'react'
import LeftNavbar from '../LeftNavbar'
import '../../assets/Styles/allproducts.css'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {
  let [products, setProducts] = useState([])
  let [price, setPrice] = useState(100000)  
  let [search , setSearch] = useState('') 
  let navigate = useNavigate()

  let fetchApi = async () => {
    let resp = await fetch('http://localhost:4000/products')
    let apidata = await resp.json()
    setProducts(apidata)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  let filteredProducts = products.filter((elem) => {
    return elem.price <= price && elem.name.toLowerCase().includes(search.toLowerCase())
  })
  
  let ViewMore = (id) =>{
       navigate(`/viewmore/${id}`)
  }
  console.log(search)
  return (
    <>
      <div className="container">
        <div className="leftnav">
          <LeftNavbar price={price} setPrice={setPrice} />
        </div>

        <div className="content">
          <div className="heading">
            <div className="search">
              <h1>Shop</h1>
              <input type="text" placeholder='Searc For Your Products' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <p>Showing products under Rs. {price}</p>
          </div>
          
          <br />

          {filteredProducts.map((elem, index) => {
            let { id , name, brand, price, image, description, rating } = elem

            return (
              <div className="cards" key={index}>
                <div className="card" onClick={()=>ViewMore(id)}>
                  <h2>{name},{id}</h2>

                  <div className="image">
                    <img src={image} alt={name} />
                  </div>

                  <h3>{brand}</h3>
                  <p>{description}</p>

                  <div className="pri_rat">
                    <p>Rating : ⭐ {rating}</p>
                    <p>Price: ₹{price}/-</p>
                  </div>
                  {/* <button>View More...</button> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AllProducts
