import React from "react";
import { useState } from "react";
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
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/authors">Authors</a>
        <a href="/create">Create Blog</a>
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
