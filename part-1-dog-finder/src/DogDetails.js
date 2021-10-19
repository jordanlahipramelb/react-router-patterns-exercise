import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dog }) => {
  if (!dog) {
    <Redirect to="/dogs" />;
  }

  return (
    <div className="DogDetails row">
      <h1>{dog.name}</h1>
      <img src={dog.src} className="img-fluid" alt={dog.name} />
      {dog.facts.map((fact, i) => (
        <li key={i}>{fact}</li>
      ))}

      <Link to="/dogs">Go Back</Link>
    </div>
  );
};

export default DogDetails;
