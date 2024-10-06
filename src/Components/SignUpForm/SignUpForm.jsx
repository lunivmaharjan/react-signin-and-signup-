import React from 'react'
import './SignUpForm.css'
import '../../App.css'

const SignUpForm = () => {
  return (
    <div className="abc">
      <div action = "">
        <h1>SignUp Form</h1>
      <div>

      <div className="inputbox">
        <input type='text' placeholder='First Name' required/>
      </div>
      <br></br>
      <div className="inputbox">
        <input type='text' placeholder='Last Name' required/>
      </div>
      <br></br>
      <div className="inputbox">
        <input type='text' placeholder='Email' required/>
      </div>
      <br></br>
      <div className="inputbox">
        <input type='text' placeholder='Contact (Optional)' required/>
      </div>
      <br></br>
      <div className="inputbox">
        <input type='password' placeholder='Password' required/>
      </div>
      <br></br>
      <div className="inputbox">
        <input type='password' placeholder='Confirm Password' required/>
      </div>
      <div className="remember-forgot">
        <label><input type='checkbox' />I agree to all terms and conditions</label>
      </div>

      </div>
       <button type='submit'>Register</button>

      </div>

    </div>
  )
}

export default SignUpForm
