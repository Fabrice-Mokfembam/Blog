import React, { useState } from 'react'
import "../login/Login.scss"
import "./Registration.scss"
import { Link } from 'react-router-dom';
import FileBase64 from "react-file-base64";

function Registration() {
  const [profile, setProfile] = useState('');

  function handleImageChange({ base64 }) {
    console.log(base64)
    setProfile(base64);
  }

   return (
    <div className='login_main_container'>
      <h1>Welcome To Thiago Blog</h1>
      <form className="form">
        <label htmlFor="name">
          <input type="text" id='name' placeholder='Enter your name' required/>
        </label>
        <label htmlFor="email">
          <input type="text" id='email' placeholder='Enter your email' required/>
        </label>
        <label htmlFor="password">
          <input type="password" id='password' placeholder='Enter your password' required/>
        </label>
        <div className="div">
          <label htmlFor="check">
            <input type="checkbox" />Do you want to be an Author
          </label>
         </div>
         <span><FileBase64
           type='file'
           accept='image/*'
           multiple={false}
           onDone={handleImageChange}
         /></span>
        <button>Sign In</button>
      </form>
      <div>
        <h4>Already have an account?</h4><span><Link to='/login'>Sign In</Link></span>
      </div>
      
    </div>
  )
}

export default Registration
