import React from 'react'
import './SigninForm.css'
import '../../App.css'

const SigninForm = () => {
  return (
<div className='wrapper'>
        <div action="">
         <h1>Sign In</h1>
         <div >
         <div className="input-box">
            <input type="text" placeholder='Email' className='input_form' required/>
         </div>
         <div className="input-box">
            <input type="Password" placeholder='Password' className='input_form' required/>
         </div>
         </div>
         <div className="remember-forgot">
           <label><input type="checkbox"/>Remember me</label> 
            <a href="#">Forget Password</a>
         </div>

         <button type="submit">Login</button>
        </div>
    </div>
  )
}
export default SigninForm
