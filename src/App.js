import "./App.css";
import Card from "./Components/Card";
import Home from "./Pages/Home";
import Bookmarks from "./Pages/Bookmarks";
import { QuoteProvider } from "./Context/QuoteContext";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <QuoteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
        </Routes>
      </Router>
    </QuoteProvider>
  );
}

export default App;
