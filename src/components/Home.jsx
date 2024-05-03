import React from "react";

import "./styles/home.css";
import Card from "./Card";

import jsonFile from "./constants.json";

const Home = () => {
  return (
    <div>
      <div className="main-text-container">
        <h1>Our book library</h1>
        <h3>Choose from a wide variety of well-known books</h3>
      </div>

      {/* Generating the cards  */}
      <dir className="card-grid">
        {Object.keys(jsonFile.books).map((key, i) => {
          return <Card key={i} item={jsonFile.books[key]} />;
        })}
      </dir>
    </div>
  );
};

export default Home;
