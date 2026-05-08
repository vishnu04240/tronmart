import React, { useState } from 'react'
import '../../assets/Styles/Home.css'
import logo from '../../assets/Images/logos/logoipsum-218.svg'
import { useNavigate } from 'react-router-dom'
// ✅ Import directly from json
import jsonData from '../../jsondata/data.json'

const Home = () => {

  // ✅ Use json directly
  let [products] = useState(jsonData.products)
  let navigate = useNavigate()

  let filterdData = products.filter((elem) => {
    return elem.category === 'audio video'
  })

  let ViewMore = (id) => {
    navigate(`/viewmore/${id}`)
  }

  return (
    <>
      <div className="home">
        <div className="poster">
          <div className="con">
            <img src={logo} alt="" />
            <h1>The best home entertainment system is here</h1>
            <p>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
          </div>
          <div className="advantages">
            <div className="box1"><h3>Free shipping</h3> <p>When you spend $80 or more</p></div>
            <div className="box2"><h3>We are available 24/7</h3> <p>Need help? contact us anytime</p></div>
            <div className="box3"><h3>Satisfied or return</h3> <p>Easy 30-day return policy</p></div>
            <div className="box4"><h3>100% secure payments</h3> <p>Visa, Mastercard, Stripe, PayPal</p></div>
          </div>
        </div>

        <div className="category">
          <h1>Shop by Category</h1>
          <div className="con">
            <div className="box1"><h1>Air conditioner</h1><p></p></div>
            <div className="box2"><h1>Audio & video</h1><p></p></div>
            <div className="box3"><h1>Smart Phones</h1><p></p></div>
            <div className="box4"><h1>Kitchen appliances</h1><p></p></div>
            <div className="box5"><h1>Home appliances</h1><p></p></div>
            <div className="box6"><h1>PCs & laptop</h1><p></p></div>
            <div className="box7"><h1>Refrigerator</h1><p></p></div>
            <div className="box8"><h1>Smart home</h1><p></p></div>
          </div>
        </div>

        <div className="banners">
          <div className="poster1"></div>
          <div className="poster2"></div>
        </div>

        <div className="tdeal">
          {filterdData.map((elem, index) => {
            let { id, name, brand, price, image, rating } = elem
            return (
              <div className="cards" key={index}>
                <div className="card" onClick={() => ViewMore(id)}>
                  <h2>{name},{id}</h2>
                  <div className="image">
                    <img src={image} alt={name} />
                  </div>
                  <h3>{brand}</h3>
                </div>
              </div>
            )
          })}
        </div>

        <div className="banner2">
          <div className="p1"></div>
          <div className="p2"></div>
          <div className="p3"></div>
        </div>
      </div>

      <div className="audvid"></div>
      <div className="happliance"></div>
      <div className="airconditioner"></div>
      <div className="minposter"></div>
      <div className="kitchen"></div>
      <div className="miniposter2"></div>
      <div className="pclap"></div>
    </>
  )
}

export default Home