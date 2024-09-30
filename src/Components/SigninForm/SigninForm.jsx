import React from 'react'
import './SigninForm.css'

const SigninForm = () => {
  return (
    <div className="wrapper">
        <div action=''>
            <h1>Signin Form</h1>
        </div> 
    <div className='input-box'>
        <input type='text' placeholder='Email' required/>
    </div>
    <div className='input-box'>
        <input type='password' placeholder='Password' required/>
    </div>
    <button type='Submit'>Submit</button>
    </div>
  )
}
export default SigninForm
