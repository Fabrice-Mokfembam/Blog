import React from 'react';
import "./Login.scss"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login_main_container'>
      <h1>Welcome Back To Thiago Blog</h1>
      <form className="form">
        <label htmlFor="email">
          <input type="text" id='email' placeholder='Enter your email' required/>
        </label>
        <label htmlFor="password">
          <input type="password" id='password' placeholder='Enter your password' required/>
        </label>
        <div className="div">
          <label htmlFor="check">
            <input type="checkbox" />Remember Me
          </label>

          <span><Link>forgot password</Link></span>
          </div>
        <button>Sign In</button>
      </form>
      <div>
        <h4>Don't have an account?</h4><span><Link to='/registration'>Sign Up</Link></span>
      </div>
      
    </div>
  )
}

export default Login
