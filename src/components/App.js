import Nav from "./Nav";
import Video from "./Video";

import "../styles/app.css"
import { Route ,Routes} from "react-router-dom";
import Shop from "./Shop";
import Men from "./Men";
import Women from "./Women";
import Products from "./Products";
import { ProductContext, UserContext } from "../context/Context";
import { useState } from "react";
import Cart from "./Cart";
import Signup from "./Signup";
 

function App() {

  const [cart,SetCart]=useState(0)
  const [product,setProduct]=useState([]);


  return (
    
  <>

    <UserContext.Provider value={[cart,SetCart]} >

    <ProductContext.Provider value={[product,setProduct]}>


    <Routes>
        
      <Route path="/" element={ <Video /> } ></Route>
      <Route path="/shop" element={ <Shop /> } ></Route>
      <Route path="/men" element={ <Men /> } ></Route>
      <Route path="/women" element={ <Women /> } ></Route>
      <Route path="/product" element={ <Products /> } ></Route>
      <Route path="/cart" element={ <Cart /> } ></Route>
      <Route path="/signup" element={ <Signup /> } ></Route>



    </Routes>

    </ProductContext.Provider>

    </UserContext.Provider>

  </> 
  );
}

export default App;
