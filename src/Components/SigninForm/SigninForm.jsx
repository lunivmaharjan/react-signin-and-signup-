import React, { useState } from 'react';
import './SigninForm.css';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const SigninForm = () => {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function verifyPassword(){
    if(!userName || !password)
      alert("Fill all the fields")

    if(userName === 'admin')
      if(password==='123')
        window.location.href = '/home'
      else
        alert("incorrect Password")
      else
        alert("No user found")
  }
  return (
    <div className='wrapper'>
        <div action="">
         <h1>SignIN</h1>
         <div >
         <div className="input-box">
            <input type="text" 
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            placeholder='Email' className='input_form' required/>
            <MdOutlineMail className="icon" />
         </div>
         <div className="input-box">
            <input type="Password" 
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder='Password' className='input_form' required/>
            <RiLockPasswordLine className="icon" />
         </div>
         </div>
         <div className="remember-forgot">
           <label style={{
            marginRight:80,
           }}><input type="checkbox"/>Remember me</label> 
            <a href="#">Forget Password</a>
         </div>

         <button type="submit"
        onClick={verifyPassword}
         >Signin</button>
        </div>
    </div>
  )
}

export default SigninForm