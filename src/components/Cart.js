import React, { useContext } from 'react'
import { ProductContext, UserContext } from '../context/Context'

export default function Cart() {


    const [product,setProduct]=useContext(ProductContext)

    product.map((items)=>{
        console.log(items.price)
    })
  return (
    <>

        {   

            product.map((items)=>

            <div className='cartWrap'>
                <img src={items.image} />
                <p>{items.price}</p>
                <p>{items.name}</p>



            </div>

            
            )
        }
 
      
    </>
  )
}
