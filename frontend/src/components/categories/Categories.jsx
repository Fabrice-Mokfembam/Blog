import React from 'react';
import { FaTools, FaFlask, FaDesktop, FaBook } from 'react-icons/fa';
import './Categories.scss';

function Categories() {
  return (
    <div className='category_container'>
      <h2>Categories</h2>
      <div className="category_wrapper">
        <div className="card_category">
          <span><FaTools className='category_icon'/></span>
          <h3>Engineering</h3>
        </div>
        <div className="card_category">
          <span><FaFlask className='category_icon'/></span>
          <h3>Science</h3>
        </div>
        <div className="card_category">
          <span><FaDesktop className='category_icon'/></span>
          <h3>Technology</h3>
        </div>
        <div className="card_category">
          <span><FaBook className='category_icon'/></span>
          <h3>General</h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;