import React,{useContext} from "react";
import "./BlogDetail.scss";
import { useParams } from 'react-router-dom';
import { FaHeart, FaUser, FaComment } from "react-icons/fa";
import { blogContext } from "../../context/blogsContext";
import { getBlogById } from "../../helpers";
import { getAuthorImage,formatDate,getAuthorName } from "../../helpers";
import { UserContext } from '../../context/UserContext';


function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(blogContext);
   const { authors } = useContext(UserContext);

  const blog = getBlogById(id, blogs)[0];
  function showblog() {
   console.log(blog)
  }
  showblog();

  return (
    <div className="blog_detail_container">
      <h1>
        {blog.title}
      </h1>
      <div className="author_details">
        <img src={getAuthorImage(blog.userId,authors)} alt="" />
        <div>
          <h3>{ getAuthorName(blog.userId,authors)}</h3>
          <h4>{formatDate(blog.createdAt) }</h4>
        </div>
      </div>

      <img src={blog.image} alt="" />

      <p  dangerouslySetInnerHTML={{ __html: blog.text_content }}>    
      </p>

      <div className="detail_icons">
        <div>
          <FaHeart className="d_icon" />
        </div>
        <div>
          <FaUser className="d_icon" />
        </div>
        <div>
          <FaComment className="d_icon" />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
