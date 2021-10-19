import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

// Create a list of dogs with their name and picture

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <h1>List of dogs</h1>

      {/* Map through the list of dogs and display their name/Link and an img */}
      <div className="row">
        {dogs.map((dog) => (
          <div className="Dog col-3" key={dog.name}>
            <img src={dog.src} alt={dog.name} />
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
