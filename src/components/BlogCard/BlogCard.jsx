import React from 'react'
import './BlogCard.scss'
import { countWords } from '../../helpers';
import img from "../../assets/heroImage.jpeg"
import img2 from '../../assets/remix1.jpg'


function BlogCard({ title, date, cardImg, textContent, profileImg, name }) {
  
  console.log(cardImg,'=>',img);
  return (
    <div className='blog_card'>
        <div className="image_container">
              <img src={img} alt="cardImg" />
              <div className="category">
                  science
              </div>
          </div>
          <h4>{ date}</h4>
          <h2>{ title}</h2>
          <h5>{ countWords(textContent)}</h5>

          <div className="profile_card">
              <img src={img2} alt="profile" />
              <h4>{ name}</h4>
          </div>

          <div className="read">
              {'==>'}
          </div>
    </div>
  )
}

export default BlogCard
