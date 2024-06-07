import React, { useState} from "react";
import "./Author.scss";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { useContext } from "react";

import { UserContext } from "../../context/UserContext";


function Author() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);

  const { authors } = useContext(UserContext);



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
    if (index2 < authors.length) {
      setIndex1(index1 + 1);
      setIndex2(index2 + 1);
    }
  }

  return (
    <div className="author_main_container">
      <h3>Browse through all our amazing writers</h3>
      <div className="writers_container">
        <FaChevronLeft className="change_icons" onClick={handlePrevPerson} />
        {
          authors.slice(index1,index2).map((item) => (
            <div className="each_card_container" key={item.name}>
              <img src={item.image} alt="" />
              <div className="credentials">
                <h2>{item.name}</h2>
                <span>{stars(item.name)}</span>
                <h2>{item.postname} posts</h2>
                <h4>popular Categories</h4>
                {/* <div className="fc">
                  {item.categories.map((item) => (
                    <h4 key={item}>{item}</h4>
                  ))}
                </div> */}
              </div>
            </div>
          ))
        }
        <FaChevronRight className="change_icons" onClick={handleNextPerson} />
      </div>

      <h2>{index1 + 1} / {authors.length}</h2>
    </div>
  );
}

export default Author;
