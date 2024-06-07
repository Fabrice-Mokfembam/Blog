import React, { useState,useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Blogs.scss';
import blogData from '../../data.js';
import BlogCard from '../../components/BlogCard/BlogCard';
import { blogContext } from '../../context/blogsContext.js';
import { getAuthorName } from '../../helpers.js';
import { UserContext } from '../../context/UserContext.js';


function Blogs() {
  const [pageNumber, setPageNumber] = useState(1);
  const { blogs } = useContext(blogContext);
   const { authors } = useContext(UserContext);

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
          blogs.slice(indexOfFirstElement, indexOfLastElement).map((item,index) => (
            <BlogCard
              key={index}
              blogId={item._id}
              title={item.title}
              date={item.createdAt}
              cardImg={item.image}
          
              textContent={item.text_content}
              profileImg={item.userId}
              name={item.userId}
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