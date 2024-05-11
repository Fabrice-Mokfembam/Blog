import React from "react";
import { BsHeart, BsPeople, BsChatDots } from "react-icons/bs";
import "./Profile.scss";
import img from "../../assets/remix1.jpg";

import BlogCard from "../../components/BlogCard/BlogCard";
import blogData from "../../data";

function Profile() {
  return (
    <div className="profile_main_container">
      <div className="profile_top_section">
        <div className="profile_details_left">
          <img src={img} alt="" />
          <div className="profile_credentials">
            <div>
              <h2>Enow Takem Ebai</h2>
              <h4>Author</h4>
            </div>
            <div>
              <h4>Disciplines:</h4>
              <h4>Engineering</h4>
            </div>
          </div>
        </div>
        <div className="profile_details_right">
          <div className="p_icons">
            <BsChatDots className="icon" />
            <div>16 comments</div>
          </div>
          <div className="p_icons">
            <BsHeart className="icon" />
            <div>8 likes</div>
          </div>
          <div className="p_icons">
            <BsPeople className="icon" />
            <div>8 followers</div>
          </div>
        </div>
          </div>
          <div className="profile_midle_section">
              <h3>My Posts</h3><span>-----------------------</span>
          </div>
          <div className="profile_bottom_section">
                 {
          blogData.slice(4).map((item) => (
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
    </div>
  );
}

export default Profile;
