import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

// PROP MUST MATCH IN PARENT COMPONENT
const Color = ({ hexColor, color, history }) => {
  if (!hexColor) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hexColor }}>
      <h1>This is {color}</h1>
      <h3>
        <Link to="/">Go Back</Link>
      </h3>
    </div>
  );
};

export default Color;
