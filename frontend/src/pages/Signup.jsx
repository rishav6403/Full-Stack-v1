import React from "react";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Signup = () => {
  return (
    <>
    <div className="d-flex  align-items-center">
      <img src="./Sign Up.png" alt="image" className="img-fluid" style={{width:"620px"}}/>
    </div>

      <div className="d-flex flex-column p-4 border rounded-3" id="signUpBox">
        <div id="headingContainer">
        <h2 className="fw-bold" id="heading1">Let us know<span id="spans">!</span></h2>
        <a href="#" className="fw-bold" id="heading">Sign <span id="spans">In</span></a>
        </div>
        <form className="d-flex flex-column mt-2">
        <input type="text" placeholder="First Name" className="p-2 border-0 border-bottom " id="signupInput"/>
        <input type="text" placeholder="Last Name" className="p-2 border-0 border-bottom" id="signupInput"/>
        <div className="border-bottom position-relative " id="icons">
        <input type="text" placeholder="Set Password" className="p-2 border-0 w-100" id="signupInput"/>
        <FaEye  className='eyeIcon'/>
        </div>
        <div className="border-bottom position-relative " id="icons">
        <input type="text" placeholder="Retype Password" className="p-2 border-0 w-100" id="signupInput"/>
        <FaEye  className='eyeIcon'/>
        </div>
        
        <div className=" border-bottom  position-relative" id="icons">
        <input type="text" placeholder="Contact Mode" className="p-2 border-0 w-100 " id="signupInput" disabled/>
        <IoMdArrowDropdown />
        </div>
        <input type="text" placeholder="Email" className="p-2 border-0 border-bottom " id="signupInput"/>
        <button className="rounded-4 border-0 py-2 mt-4 text-white" id="signUpButton">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
