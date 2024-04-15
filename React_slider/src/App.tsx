import React from "react";
import Carousel from "./Carousel folder/Carousel";

import "./App.css";

function App() {
  const slides = ["four.jpg", "three.jpg", "one.jpg", "two.jpg", "movies.png"];

  return (
    <div className="app">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;


