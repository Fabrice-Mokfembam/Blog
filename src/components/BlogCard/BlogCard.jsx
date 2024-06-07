import React, { useContext } from 'react';
import './BlogCard.scss';
import img2 from '../../assets/remix1.jpg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getAuthorName } from '../../helpers';
import { formatDate } from '../../helpers';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { getAuthorImage } from '../../helpers';

function BlogCard({blogId, title, date, cardImg, textContent, profileImg, name }) {
  const navigate = useNavigate();
  const { authors } = useContext(UserContext);

  function routeToDetail() {
    navigate(`/blogdetail/${blogId}`);
  }

  return (
    <div className='blog_card' onClick={routeToDetail}>
      <div className="image_container">
        <img src={cardImg} alt="cardImg" />
        <div className="category">
          science
        </div>
      </div>
      <h4>{formatDate(date)}</h4>
      <h2>{title}</h2>
      <div className='text-truncate h4' dangerouslySetInnerHTML={{ __html: textContent }}></div>

      <div className="profile_card">
        <img src={getAuthorImage(profileImg,authors)} alt="profile" />
        <h4>{getAuthorName(name, authors)}</h4>
      </div>

      <div className="read">
        <FaLongArrowAltRight />
      </div>
    </div>
  );
}

export default BlogCard;