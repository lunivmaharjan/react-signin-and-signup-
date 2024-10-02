import React from 'react'
import './SigninForm.css'
import '../../App.css'

const SigninForm = () => {
  return (
    <div className="wrapper">
        <div action=''>
            <h1>Signin Form</h1>
        </div> 
        <br></br>
    <div className='input-box'>
        <input type='text' placeholder='Email' required/>
    </div>
    <br></br>
    <div className='input-box'>
        <input type='password' placeholder='Password' required/>
    </div>
    <br></br>
    <button type='Submit'>Submit</button>
    </div>
  )
}
export default SigninForm
