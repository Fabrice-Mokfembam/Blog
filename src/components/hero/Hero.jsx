import React from 'react'
import './Hero.scss'
import heroImage from '../../assets/hero2.png';

function Hero() {
  return (
          <div className="hero_container">
              <div className="hero_text_container">
                  <h1>Embrace the Sublime Harmony of <span>Aesthetics and Powerful Storytelling</span></h1>
                  <button>Browse Blogs</button>
              </div>
              <div className="hero_image_container">
                  <img src={heroImage} alt="heroimage" />
              </div>
        </div>
  )
}

export default Hero
