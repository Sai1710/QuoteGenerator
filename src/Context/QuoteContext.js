import React from "react";
import { createContext, useReducer } from "react";
import { useState } from "react";
import quoteReducer from "./QuoteReducer";
const QuoteContext = createContext();
export const QuoteProvider = ({ children }) => {
  const initialState = {
    quote: null,
    loading: false,
    tag: "random",
    tags: null,
  };
  const [state, dispatch] = useReducer(quoteReducer, initialState);
  const fetchTags = async () => {
    const res = await fetch("https://api.quotable.io/tags");
    var data = await res.json();
    dispatch({
      type: "SET_TAGS",
      payload: data,
    });
  };
  const setTag = (value) => {
    dispatch({
      type: "SET_TAG",
      payload: value,
    });
  };

  const generateQuote = async (tags) => {
    if (tags === "random") {
      const res = await fetch(`https://api.quotable.io/random
      `);
      var data = await res.json();
    } else {
      const res = await fetch(`https://api.quotable.io/random?tags=${tags}
      `);
      var data = await res.json();
    }
    console.log(data);
    dispatch({
      type: "SET_QUOTE",
      payload: data,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.tag);
    generateQuote(state.tag);
  };
  return (
    <QuoteContext.Provider
      value={{
        quote: state.quote,
        loading: state.loading,
        tags: state.tags,
        tag: state.tag,
        generateQuote,
        fetchTags,
        setTag,
        handleSubmit,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
