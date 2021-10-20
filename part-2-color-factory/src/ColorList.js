import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

// colors state passed in from Routes
const ColorList = ({ colors }) => {
  const colorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <div className="ColorList-header">
        <h1>Welcome to the color factory.</h1>
        <h2>
          <Link to="/colors/new">Add a color</Link>
        </h2>
      </div>
      <div className="ColorList-colors">
        <p>Select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

export default ColorList;
