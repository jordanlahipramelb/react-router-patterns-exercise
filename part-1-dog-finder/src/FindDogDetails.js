import React from "react";
import DogDetails from "./DogDetails";
import NotFound from "./NotFound";
import { useParams, Redirect } from "react-router-dom";

/** Extract dog name from URL params
 *
 * Match the dog name with the names of the dogs passed into the component.
 */

const FindDogDetails = ({ dogs }) => {
  const { name } = useParams();

  if (name) {
    const currDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currDog} />;
  }

  return null;
};

export default FindDogDetails;
