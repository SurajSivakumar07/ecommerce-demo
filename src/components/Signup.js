import React, { useRef } from 'react'

import bg from "../assests/signup.mp4"

 
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

  const nameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const confirmPasswordRef=useRef();


   


  
  const formHandler=(e)=>{

    const email=emailRef.current.value
    const password=passwordRef.current.value
    e.preventDefault();

    const auth = getAuth();
    if(passwordRef.current.value===confirmPasswordRef.current.value){

    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.accessToken)

          
            localStorage.setItem("session_podcast", user.uid)
            // console.log(cookies.get('myCat')); ,
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            alert(errorCode,errorMessage)
        });
    }
    else{
        alert("Mismatch password")
    }
 }
  return (
    <>


    <div className='signupWrap'>
        <div className='signupvideo'>

          {/* <video src={bg} autoPlay loop></video> */}

        </div>

        <div className='formwrap'>


            <div className='signupfrom'>

                  <form  onSubmit={formHandler}>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter Your Name" ref={nameRef}></input>
                        <br></br>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter Your Email" ref={emailRef}></input>
                        <br></br>
                        <label>Password:</label>
                        <input type="password" placeholder="Enter your Password" ref={passwordRef}></input>
                        <br></br>
                        <label>Confirm Password:</label>
                        <input type="password" placeholder="Confirm  Password" ref={confirmPasswordRef}></input>
                        <br></br>
                        <input type="submit" ></input>

                  </form>

              </div>
              <div className='about'>

                  <h1>About</h1>
              </div>


        </div>

        
        

    </div>
    
    </>
  )
}
