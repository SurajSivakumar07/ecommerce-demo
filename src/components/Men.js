import React, { useEffect, useState } from 'react'


import "../styles/men.css"
import Nav from './Nav';

import bg from "../assests/bgimg1.jpg"
export default function Men() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(json=>setData(json))
    },[])

    

  return (
    <> 

    <div className='whole'>


    
        <div className='mennav'>
            <Nav />
        </div>
      <div className='apiwrap'>
        

            {
                data && data.filter((items)=>{
                    if(items.category.startsWith("men's")){
                        return items
                    }
                }).map((items)=> <>

                <div className='clothing'>
                    <img src={items.image} />

                    <div className='description'>

                    <h3>Title{items.title}</h3>
                    <p>Price:{items.price}</p>
                    <p>Category:{items.category}</p>

                    <p>Rating:{items.rating.rate}</p>
                    <div className='btnwrap'>
                        <button>Buy Now</button>
                       

                    </div>
                    <div className='hovercart'>
                            <button>Cart+</button>


                    </div>


                    </div>


                </div>
                
                
                </>)
            }
      </div>

      </div>
      
    </>
  )
}
