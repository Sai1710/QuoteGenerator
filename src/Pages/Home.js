import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import QuoteContext from "../Context/QuoteContext";
import { BsBookmarks } from "react-icons/bs";
function Home() {
  const { quote, generateQuote, tags, fetchTags, tag, setTag, handleSubmit } =
    useContext(QuoteContext);

  const handleChange = (value) => {
    setTag(value);
  };
  // console.log(tags);
  useEffect(() => {
    generateQuote("random");
    fetchTags();
  }, []);
  return (
    <>
      <div className="App">
        <Card data={quote}></Card>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="tag-label">Select Tag</label>
            <select
              className="form_input"
              value={tag}
              onChange={(e) => handleChange(e.target.value)}
            >
              <option className="options" key="random" value="random">
                Random
              </option>
              {tags &&
                tags.map((item) => {
                  return (
                    <option
                      className="options"
                      key={item.name}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <button type="submit" className="btn">
              Genrerate Quote
            </button>
          </form>
        </div>
      </div>
      <div className="bookmarks">
        <Link to="/bookmarks" className="bookmark-link">
          <BsBookmarks className="bookmark-icon" />
          Bookmarks
        </Link>
      </div>
    </>
  );
}

export default Home;
