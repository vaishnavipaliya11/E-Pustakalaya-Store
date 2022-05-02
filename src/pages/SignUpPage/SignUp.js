import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css";

const SignUp = () => {
  const navigate= useNavigate()
  return (
    <div class="form-container">
   <div class="validation">
    <form action="">
    
     <input type="text" class="form-input" placeholder="Enter your first name" /> 

     <input type="text" class="form-input" placeholder="Enter your last name" /> 
     
     <input type="text" class="form-input" placeholder="Enter your email"/> 
    
     <input type="text" class="form-input" placeholder="Enter your password"/>

     <div>
     <h3>Already have an account?</h3> 
     <button onClick={() => navigate("/login")}>Login </button>
     </div>
     <div id="error">
        <p> incorrect password!!</p>
     </div>
     </form>
    </div>
 </div>
  )
};

export { SignUp };
