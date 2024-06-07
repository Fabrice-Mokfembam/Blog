import React, { useState, useContext, useRef } from "react";
import "./CreateBlog.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileBase64 from "react-file-base64";
import { ID } from "../../context/idContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { blogContext } from "../../context/blogsContext";

function CreateBlog() {
  const [imageUrl, setImageUrl] = useState("");
  const [textContent, setTextContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useContext(ID);
  const quillRef = useRef(null);
  const navigate = useNavigate();
  const { blogs, setBlogs} = useContext(blogContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authError, setAuthError] = useState(null);

  function handleImageChange({ base64 }) {
    console.log(base64);
    setImageUrl(base64);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handletextcontentChange(value) {
    setTextContent(value);
  }

  async function PostBlog(e) {
    e.preventDefault();
    if (!id) {
      setAuthError(true);
      return
    }
    setIsLoading(true);

    const body = {
      userId: id,
      title,
      text_content: textContent,
      image: imageUrl,
      category,
    };

    try {
      const data = await axios.post('http://localhost:5000/api/blogs/create', body);
      console.log(data)
      setBlogs(prev => [data,...prev])
      console.log("Blog posted successfully");
      setImageUrl("");
      setTextContent("");
      setTitle("");
      setCategory("");
      navigate("/blogs");
    } catch (error) {
      console.error("Error posting blog:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="create_main_container">
      <form onSubmit={PostBlog}>
        {authError && <div className="error">Sign Up or Sign In</div>}
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter a Title"
            onChange={(e) => {
              setAuthError(null)
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="image">
          <FileBase64 type="file" multiple={false} onDone={handleImageChange} />
        </div>
        <ReactQuill ref={quillRef} className="quill" onChange={handletextcontentChange} />
        <div className="category">
          Category
          <label htmlFor="engineering">
            <input
              type="radio"
              id="engineering"
              value="engineering"
              checked={category === "engineering"}
              onChange={handleCategoryChange}
            />
            Engineering
          </label>
          <label htmlFor="science">
            <input
              type="radio"
              id="science"
              value="science"
              checked={category === "science"}
              onChange={handleCategoryChange}
            />
            Science
          </label>
          <label htmlFor="technology">
            <input
              type="radio"
              id="technology"
              value="technology"
              checked={category === "technology"}
              onChange={handleCategoryChange}
            />
            Technology
          </label>
          <label htmlFor="general">
            <input
              type="radio"
              id="general"
              value="general"
              checked={category === "general"}
              onChange={handleCategoryChange}
            />
            General
          </label>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Add"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;