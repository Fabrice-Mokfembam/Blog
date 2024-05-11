import React from 'react'
import './Author.scss'
import img from '../../assets/remix1.jpg'

function Author() {
  return (
    <div className='author_container'>
          <h2>Popular Authors</h2>
          <div className="Author_wrapper">
              <div className="author">
                  <img src={img} alt="" />
                  <h2>Thiago A</h2>
              </div>
              <div className="author">
                  <img src={img} alt="" />
                  <h2>Thiago A</h2>
              </div>
             
          </div>
    </div>
  )
}

export default Author
