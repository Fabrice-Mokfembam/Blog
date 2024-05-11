import React, { useState } from "react";
import "./CreateBlog.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileBase64 from "react-file-base64";

function CreateBlog() {
  const [imageUrl, setImageUrl] = useState("");
  const [textContent, setTextContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [showreview, setShowReview] = useState(false);

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

  return (
    <div className="create_main_container">
      <form>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter a Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="image">
          <FileBase64 type="file" multiple={false} onDone={handleImageChange} />
        </div>
        <ReactQuill className="quill" onChange={handletextcontentChange} />
        <div className="category">
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

        <button
          onClick={(e) => {
            e.preventDefault();
            setShowReview(true);
          }}
        >
          ADD
        </button>
      </form>

      {showreview && (
        <div className="review">
          <div>
            <h3>{title}</h3>
            {imageUrl && <img src={imageUrl} alt="" />}
            <h5>{category}</h5>
            <div>{textContent}</div>
            <p onClick={() => {
              setShowReview(false);
            }}>X</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateBlog;
