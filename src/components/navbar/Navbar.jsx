import React from "react";
import { useState } from "react";
import{Link} from 'react-router-dom'
import "./Navbar.scss";
import menu from "../../../public/assets/menu.png";

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
        <a href="" className="third">
          Profile
        </a>
        <a href="" className="third">
          Sign up
        </a>
        <span>
          <img src={menu} alt="menu"  onClick={()=>{setOpen(!open)}}/>
        </span>
      </div>

      <div className={`sidebar ${ open ? 'active': null }`}>
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/authors">Authors</a>
        <a href="/create">Create Blog</a>
        <a href="/profile" className="third">
          Profile
        </a>
        <a href="/registration" className="third">
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
