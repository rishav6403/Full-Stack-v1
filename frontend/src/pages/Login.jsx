import React from 'react'
import { FaEye } from "react-icons/fa";

const Login = () => {
  return(
    <>
     <div className="d-flex  align-items-center">
      <img src="./Sign In.png" alt="image" className='img-fluid' style={{width:"620px"}}/>
    </div>

      <div className="d-flex flex-column p-4 border rounded-3" id="signUpBox">
        <h2 className="fw-bold" id="heading">Let us know <span id="spans">!</span></h2>

        <form className="d-flex flex-column mt-2">
        <input type="text" placeholder="Email" className="p-2 border-0 border-bottom mt-2"/>
        <div className="border-bottom position-relative " id="icons">
        <input type="text" placeholder="Password" className="p-2 border-0  mt-2 w-100"/>
        <FaEye  className='eyeIcon'/>
        </div>
        <button className="rounded-4 border-0 py-2 text-white fw-bold" id="signUpButton">Sign In</button>
       <a href="#" id="signUpTag" className='border-2'><button className="rounded-4 py-2 mt-4 fw-bold" id="signInButton">Sign Up</button></a> 
        </form>
      </div>
    </>
  )
}

export default Login