import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Blogs.scss';
import blogData from '../../data.js';
import BlogCard from '../../components/BlogCard/BlogCard';

function Blogs() {
  const [pageNumber, setPageNumber] = useState(1);

  const CardPerPage = 10;
  var indexOfLastElement = CardPerPage * pageNumber;
  let indexOfFirstElement = indexOfLastElement - CardPerPage;

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      }
      console.log('index 1st:', indexOfFirstElement, '/n', 'index last:', indexOfLastElement);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(blogData.length / CardPerPage);
      if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      }
      
      console.log('index 1st:', indexOfFirstElement, '/n', 'index last:', indexOfLastElement);
  };

  return (
    <div className='blog_main_container'>
      <div className="blog_main_wrapper">
        <div className="search_components">
          <input type="text" id='search' placeholder='search blog' />
          <select name="select_category" id="select_category">
            <option>select category</option>
            <option value="Engineering">Engineering</option>
            <option value="Science">Science</option>
            <option value="Technology">Technology</option>
            <option value="General">General</option>
          </select>
        </div>
      </div>

      <div className="blogs_container">
        {
          blogData.slice(indexOfFirstElement, indexOfLastElement).map((item) => (
            <BlogCard
              key={item.title}
              title={item.title}
              date={item.date}
              cardImg={item.imgSrc}
              textContent={item.textContent}
              profileImg={item.profileImgSrc}
              name={item.author}
            />
          ))
        }
      </div>

      <div className="controls">
        <span onClick={handlePrevPage}><FaChevronLeft /> prev</span>
        <span onClick={handleNextPage}> next<FaChevronRight /> </span>
      </div>
    </div>
  );
}

export default Blogs;