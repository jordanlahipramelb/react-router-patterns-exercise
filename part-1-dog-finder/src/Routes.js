import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import FindDogDetails from "./FindDogDetails";
import NotFound from "./NotFound";

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        {/* FindDogDetails filters the 'dogs' prop to a single dog, then returns the single dog's DogDetails found in URL parameter*/}
        <FindDogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
