import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function Login(e) {
    e.preventDefault();
    setIsLoading(true)
    const body = {
      email,
      password,
    };

    try {
      const { data } = await axios.post( "http://localhost:5000/api/users/Login",body);
      localStorage.setItem("userId", data._id);
      console.log(data);
      if (typeof data === 'string') {
        setError(true);
        return
      }
      setError(false);
      navigate("/");
    } catch (error) {
      
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="login_main_container">
      <h1>Welcome Back To Thiago Blog</h1>
      <form className="form" onSubmit={Login}>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setError(false)
              setEmail(e.target.value)
            }}
            placeholder="Enter your email"
            required
          />
          {error? (<div className="error">invalid username or password</div>): null}
        </label>
        <label htmlFor="password" className="password">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setError(false)
              setPassword(e.target.value)
            }}
            required
          />
           {error? (<div className="error">invalid username or password</div>): null}
          {showPassword ? (
            <FaEyeSlash className="eye_icon" onClick={handleShowPassword} />
          ) : (
            <FaEye className="eye_icon" onClick={handleShowPassword} />
          )}
        </label>
        <div className="div">
          <label htmlFor="check">
            <input type="checkbox" />
            Remember Me
          </label>

          <span>
            <Link>forgot password</Link>
          </span>
        </div>
        <button type="submit">{ isLoading ? '...Loading': 'Sign In'}</button>
      </form>
      <div>
        <h4>Don't have an account?</h4>
        <span>
          <Link to="/registration">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
