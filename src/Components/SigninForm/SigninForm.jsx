import React from 'react'
import '../../index.css'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const SigninForm = () => {

  return (
<div className='wrapper'>
        <div action="">
         <h1>Sign In</h1>
         <div >
         <div className="input-box">
            <input type="text" placeholder='Email' className='input_form' required/>
            <MdOutlineMail className="icon" />
         </div>
         <div className="input-box">
            <input type="Password" placeholder='Password' className='input_form' required/>
            <RiLockPasswordLine className="icon" />
         </div>
         </div>
         <div className="remember-forgot">
           <label><input type="checkbox"/>Remember me</label> 
            <a href="#">Forget Password</a>
         </div>
          <br></br>
         <button type="submit">Login</button>
        </div>
    </div>
  )
}
export default SigninForm
