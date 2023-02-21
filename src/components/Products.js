import {React,useState,useEffect, useContext} from 'react'
import bg from "../assests/bg.mp4"
import { ProductContext, UserContext } from '../context/Context';
import "../styles/product.css"
import Nav from './Nav';
export default function Products() {

  //search

  const [search,setSearch]=useState("");
  //apidata
  const [data,setData]=useState([]);

  //mens

  const [men,setMen]=useState("")

  //womens
  const [women,setWomen]=useState("")

  //electronics

  const [elec,setElec]=useState("")


  //jewells
  const [jew,setJew]=useState("")


  //useContext

  const [cart,setCart]=useContext(UserContext);
  const [product,setProduct]=useContext(ProductContext);



  const addCart=()=>{

      setCart(cart+1)

      



  }


  const menBtn=()=>{
    setMen("mens")
    console.log(men);
  }

  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
          .then(res=>res.json())
          .then(json=>setData(json))
  },[])


  let prodArr=[];
  
  return (
    <>

    <Nav />
    

    <div className='videocontext'>
        {/* <video src={bg} /> */}
    <div className='prodWrap'>
      <div className='searchBar'>
        <h2>Search What You Want: </h2>
          <input type="text"  placeholder="search" onChange={(e)=>{
            setSearch(e.target.value)
          
          }}/>
      </div>
       <h2 id='filter'>Filter by Category</h2>
      <div className='cato'>

         
          
            <button onClick={menBtn}>Men's</button>
            <button  onClick={()=>setWomen("wome")}>Womens</button>
            <button  onClick={()=>setElec("elec")}>Electronic</button>
            <button onClick={()=>setJew("jew")}>Jewellery</button>
 


      </div>

      <div className='productitems'>
      {
                data && data.filter((items)=>{
                  if(search==""){
                    return items
                  }

                  if(women!==""){
                    return  items.category.startsWith("w")
                  }
                  // else if(search!==" "){
                  //   return items.category.includes(search)
                  // }
                  // else if(men!==" "){
                  //   return items.category.startsWith(men)
                  // }
                }).map((items)=> <>

                <div className='itemsWrap'>
                    <img src={items.image} />

                    <div className='descriptionp'>

                      <h3>Title{items.title}</h3>
                      <p>Price:{items.price}</p>
                      <p>Category:{items.category}</p>

                      <p>Rating:{items.rating.rate}</p>
                    <div className='btnwraprod'>
                        <button>Buy Now</button>
                        <button onClick={()=>{
                            setCart(cart+1)

                             
                            setProduct({name:items.title,price:items.price,image:items.image})
                            console.log(product)
                        }}>Cart+</button>


                    </div>
                  

                    </div>


                </div>
                
                
                </>)
            }
      </div>

      
    </div>

    </div>


      
    </>
  )
}
