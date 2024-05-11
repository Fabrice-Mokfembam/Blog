import React from 'react'
import './Hero.scss'
import heroImage from '../../assets/mindPower.jpg';

function Hero() {
  return (
          <div className="hero_container">
              <div className="hero_text_container">
                  <h1>Embrace the Sublime Harmony of Aesthetics and Powerful Storytelling</h1>
                  <button>Browse Blogs</button>
              </div>
              <div className="hero_image_container">
                  <img src={heroImage} alt="heroimage" />
              </div>
        </div>
  )
}

export default Hero
