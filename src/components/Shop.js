import React from 'react'
import Nav from './Nav'
import Search from './Search'
import "../styles/app.css"
import men from "../assests/mens.mp4"
import women from "../assests/women.mp4"
import bg from "../assests/bg.mp4"

import "../styles/shop.css"
import { useNavigate } from 'react-router-dom'
export default function Shop() {

  const navigate=useNavigate();
  return (
    <>
    <div className='shopsear'> 

        <div className='shopnav'>
           
          <Nav />

       
        </div>

        <div class="wraping">

        
            <div className='men'>
                <video src={men} autoPlay loop ></video>

                <div className='menshop'>
                    <button onClick={(e)=>navigate("/men")}>Shop Now</button>
                </div>

            </div>

            <div className='women'>
                <video src={women} autoPlay loop ></video>
                <div className='menshop'>
                    <button onClick={(e)=>navigate("/women")}>Shop Now</button>
                </div>
                
            </div>
        </div>
        

      
 


    </div>
    
    </>
  )
}
