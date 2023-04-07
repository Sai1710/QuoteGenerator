import React from "react";

function BookmarkCard({ data }) {
  return (
    <div className="container">
      <h2>{data.content}</h2>
      <h4>-{data.author}</h4>
    </div>
  );
}

export default BookmarkCard;
