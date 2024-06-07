import React , {useContext} from "react";
import { BsHeart, BsPeople, BsChatDots } from "react-icons/bs";
import "./Profile.scss";
import img from "../../assets/remix1.jpg";

import BlogCard from "../../components/BlogCard/BlogCard";
import blogData from "../../data";
import { UserContext } from "../../context/UserContext";
import { blogContext } from "../../context/blogsContext";
import { ID } from "../../context/idContext";
import { getAuthorImage } from "../../helpers";

function Profile() {
  const { blogs } = useContext(blogContext);
  const { authors } = useContext(UserContext);
  const { id } = useContext(ID)
  
  const currentUser = authors.filter((author) => {
    return author._id === id;
  })[0];

  const blogsOfCurrentUser = blogs.filter((blog) => {
    return blog.userId === id;
  })

  console.log(blogsOfCurrentUser)

  return (
    <div className="profile_main_container">
      <div className="profile_top_section">
        <div className="profile_details_left">
          <img src={getAuthorImage(id,authors)} alt="" />
          <div className="profile_credentials">
            <div>
              <h2>{ currentUser.name}</h2>
              <h4>Author</h4>
            </div>
            <div>
              <h4>Disciplines:</h4>
              <h4>{ currentUser.category}</h4>
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
          blogsOfCurrentUser.slice(4).map((item,index) => (
            <BlogCard
              key={index}
              title={item.title}
              date={item.createdAt}
              cardImg={item.image}
              textContent={item.text_content}
              profileImg={id}
              name={id}
            />
          ))
        }
          </div>
    </div>
  );
}

export default Profile;
