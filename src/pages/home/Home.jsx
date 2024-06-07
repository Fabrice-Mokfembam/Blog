import React, { useContext } from "react";
import Hero from "../../components/hero/Hero";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Home.scss";
import Categories from "../../components/categories/Categories";
import Author from "../../components/authors/Author";
import { blogContext } from "../../context/blogsContext";
import { UserContext } from "../../context/UserContext";

function Home() {
  const { blogs } = useContext(blogContext);
  const {authors} = useContext(UserContext)

  return (
    <div>
      <Hero />
      <div className="blogs_section_container">
        <h1>All Blogs</h1>
        <div className="blogs_wrapper">
          {blogs.slice(0, 8).map((item, index) => (
            <BlogCard
              key={index}
              blogId={item._id}
              title={item.title}
              date={item.createdAt}
              cardImg={item.image}
              textContent={item.text_content}
              profileImg={item.userId}
              name={item.userId }
            />
          ))}
        </div>
      </div>

      <div className="featuring_part">
        <h1>Featuring</h1>
        <strong>
          Personalized, Stay Informed with Cutting-Edge, Customized World
          Insights to Explore the Latest, Aligned with Your Preferences.
        </strong>
      </div>

      <Categories />

      <Author />
    </div>
  );
}

export default Home;
