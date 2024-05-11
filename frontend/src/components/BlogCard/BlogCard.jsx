import React from 'react'
import './BlogCard.scss'

import { countWords } from '../../helpers';


function BlogCard({title,date,cardImg,textContent,profileImg,name}) {
  return (
    <div className='blog_card'>
        <div className="image_container">
              <img src={cardImg} alt="cardImg" />
              <div className="category">
                  science
              </div>
          </div>
          <h4>{ date}</h4>
          <h2>{ title}</h2>
          <h5>{ countWords(textContent)}</h5>

          <div className="profile_card">
              <img src={profileImg} alt="profile" />
              <h4>{ name}</h4>
          </div>

          <div className="read">
              {'==>'}
          </div>
    </div>
  )
}

export default BlogCard