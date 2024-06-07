import React, { useState } from "react";
import "../login/Login.scss";
import "./Registration.scss";
import { Link, useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ID } from "../../context/idContext";
import { useContext } from "react";

function Registration() {
  const [bool, setBool] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setID } = useContext(ID);

  function handleImageChange({ base64 }) {
    setImage(base64);
  }

  function handleUserTypeChange() {
    setBool(!bool);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function registerUser(e) {
    e.preventDefault();
    setIsLoading(true)
    setUserType(bool ? "author" : "viewer");

    const userData = {
      name,
      email,
      password,
      userType,
      image,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/create",
        userData
      );
      localStorage.setItem("userId", data._id);

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login_main_container">
      <h1>Welcome To Thiago Blog</h1>
      <form className="form">
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {showPassword ? (
            <FaEyeSlash className="eye_icon" onClick={handleShowPassword} />
          ) : (
            <FaEye className="eye_icon" onClick={handleShowPassword} />
          )}
        </label>
        <div className="div">
          <label htmlFor="check">
            <input
              type="checkbox"
              checked={bool}
              onChange={handleUserTypeChange}
            />
            {userType}
            Do you want to be an Author
          </label>
        </div>
        <span>
          <FileBase64
            type="file"
            accept="image/*"
            multiple={false}
            onDone={handleImageChange}
          />
        </span>
        <button onClick={registerUser}>{ isLoading ? '...Loading': 'ADD'}</button>
      </form>
      <div>
        <h4>Already have an account?</h4>
        <span>
          <Link to="/login">Sign In</Link>
        </span>
      </div>
    </div>
  );
}

export default Registration;
