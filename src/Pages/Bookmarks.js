import React from "react";
import BookmarkCard from "../Components/BookmarkCard";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
function Bookmarks() {
  const items = JSON.parse(localStorage.getItem("itemsArray")) || [];

  if(!items){
    return (
      <h1 className="no-bookmark">No Bookmarks</h1>;
    )
  }
  return (
    
    <div>
      {items.map((item) => {
        console.log(item.content);
        <h1>{item.content}</h1>;
        return <BookmarkCard data={item} />;
      })}
      <div className="bookmarks">
        <Link to="/" className="bookmark-link">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Bookmarks;
