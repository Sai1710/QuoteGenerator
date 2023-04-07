import React, { useContext } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import QuoteContext from "../Context/QuoteContext";
function Card({ data }) {
  const { quote } = useContext(QuoteContext);
  const handleClick = (e) => {
    console.log(e);
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(quote);
    localStorage.setItem(`itemsArray`, JSON.stringify(oldItems));
  };
  if (data == null) {
    return (
      <div className="container">
        <h2>Quote of the day is...</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>{data.content}</h2>
      <h4>-{data.author}</h4>
      <button className="bookmark-btn" onClick={handleClick}>
        <BsBookmarkFill />
      </button>
    </div>
  );
}

export default Card;
