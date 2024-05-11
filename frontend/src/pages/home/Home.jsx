import React from 'react';
import Hero from '../../components/hero/Hero';
import BlogCard from '../../components/BlogCard/BlogCard';
import './Home.scss';
import blogData from '../../data';
import Categories from '../../components/categories/Categories';
import Author from '../../components/authors/Author';


function Home() {
  return (
    <div>
      <Hero />
      <div className="blogs_section_container">
        <h1>All Blogs</h1>
        <div className="blogs_wrapper">
          {
            blogData.slice(0,8).map((item) => (
              <BlogCard key={ item.title} title={item.title } date={ item.date} cardImg={item.imgSrc } textContent={item.textContent } profileImg={ item.profileImgSrc} name={item.author } />
            ))
          }
         </div>
      </div>

      <div className="featuring_part">
        <h1>Featuring</h1>
        <strong>Personalized, Stay Informed with Cutting-Edge, Customized World Insights to Explore the Latest, Aligned with Your Preferences.</strong>
      </div>

      <Categories />
      
        <Author/>
    </div>
  )
}

export default Home
