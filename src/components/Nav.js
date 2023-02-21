import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/nav.css"


import { UserContext } from '../context/Context'
import { useContext } from 'react'
export default function Nav() {


  const [cart,setCart]=useContext(UserContext);

   
  return (
    <>
      <div className='navWrap' >

        <div className='navBar'>
            <ul>

              <li> <Link to="/" >Home</Link ></li> 
              <li> <Link to="/shop" >Shop</Link ></li> 

              <li> <Link  to="/product">Products</Link ></li> 

              <li> <Link >Pages</Link ></li> 

              <li> <Link >Buy Now</Link ></li> 

            </ul>
        </div>

        <div className='cart'>
             <Link to="/cart" > <i class="fa-solid fa-bag-shopping"></i></Link>
             <span>{cart}</span>
        </div>

      </div>
    </>
  )
}
