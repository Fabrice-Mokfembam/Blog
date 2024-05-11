import React, { useState } from "react";
import "./Author.scss";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import me from "../../assets/remix1.jpg";

const cards = [
  {
    image: "../../assets/remix1.jpg",
    name: "Alcantara F",
    stars: 4,
    postCount: 10,
    categories: ["science", "Engineering"],
  },
  {
    image: "../../assets/remix1.jpg",
    name: "John Doe",
    stars: 3,
    postCount: 5,
    categories: ["technology", "programming"],
  },
  {
    image: "../../assets/remix1.jpg",
    name: "Jane Smith",
    stars: 5,
    postCount: 15,
    categories: ["art", "design"],
  },
  {
    image: "../../assets/remix1.jpg",
    name: "Alex Johnson",
    stars: 2,
    postCount: 8,
    categories: ["business", "finance"],
  },
  {
    image: "../../assets/remix1.jpg",
    name: "Emily Brown",
    stars: 1,
    postCount: 3,
    categories: ["health", "fitness"],
  },
];

function Author() {
  const cardPerPage = 1;
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);



function stars(num) {
  const starElements = [];

  for (let i = 0; i < num; i++) {
    starElements.push(<FaStar key={i} />);
  }

  return starElements;
  }
  
  function handlePrevPerson() {
    if (index1 > 0) {
      setIndex1(index1 - 1);
      setIndex2(index2 - 1);
    }
  }

  function handleNextPerson() {
    if (index2 < cards.length) {
      setIndex1(index1 + 1);
      setIndex2(index2 + 1);
    }
  }
  return (
    <div className="author_main_container">
      <h3>Browse through all our amazing writers</h3>
      <div className="writers_container">
        <FaChevronLeft className="change_icons" onClick={handlePrevPerson}/>
        {cards.slice(index1,index2).map((item) => (
          <div className="each_card_container" key={item.categories}>
            <img src={item.image} alt="" />
            <div className="credentials">
              <h2>{item.name }</h2>
              <span>{ stars(item.stars)}</span>
              <h2>{ item.postCount} posts</h2>
              <h4>popular Categories</h4>
              <div className="fc">
                {
                  item.categories.map(item => (
                    <h4 key={item}>{ item}</h4>
                  ))
               }
              </div>
            </div>
          </div>
        ))}

        <FaChevronRight className="change_icons" onClick={handleNextPerson}/>
      </div>

      <h2>{index1 +1} / { cards.length}</h2> 
    </div>
  );
}

export default Author;
