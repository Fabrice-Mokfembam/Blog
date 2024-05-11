import React from "react";
import { useState } from "react";
import{Link} from 'react-router-dom'
import "./Navbar.scss";
import menu from "../../assets/menu.png";

function Navbar() {
 const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav_section_1">
        <a href="/">
          <h1>ThiagoBlog</h1>
        </a>
      </div>
      <div className="nav_section_2">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/authors">Authors</Link>
        <Link to="/create">Create Blog</Link>
      </div>
      <div className="nav_section_3">
        <Link to="/profile" className="third">
          Profile
        </Link>
        <Link to="/registration" className="third">
          Sign up
        </Link>
        <span>
          <img src={menu} alt="menu"  onClick={()=>{setOpen(!open)}}/>
        </span>
      </div>

      <div className={`sidebar ${ open ? 'active': null }`}>
         <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/authors">Authors</Link>
        <Link to="/create">Create Blog</Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/registration">Sign up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
