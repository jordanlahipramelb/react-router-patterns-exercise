import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

const Routes = () => {
  const INITIAL_COLORS = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, setColors] = useState(INITIAL_COLORS);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  // adds new color to colors state
  // function is passed down to NewColorForm
  const handleAddColor = (newColorObj) => {
    setColors((previousColors) => ({ ...previousColors, ...newColorObj }));
  };

  const showCurrColor = (props) => {
    const { color } = props.match.params;
    const hexColor = colors[color];
    // PROPS MUST MATCH IN EACH COMPONENT OR IT WON'T DIRECT TO URL
    //    hexColor prop matches hexColor prop in Color, not what's taken into prop
    return <Color {...props} hexColor={hexColor} color={color} />;
  };

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm addColor={handleAddColor} />
      </Route>
      {/* Renders component from showCurrColor function */}
      <Route path="/colors/:color" render={showCurrColor} />

      {/* redirects to homepage if invalid url */}
      <Redirect to="/colors" />
    </Switch>
  );
};

export default Routes;
