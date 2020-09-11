import React from "react";
import { Switch, Route } from "react-router-dom";
import Invitation from "./Invitation";
import SchoolList from "./SchoolList";
import Shop from "./Shop";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Invitation />,
        </Route>
        <Route exact path="/schoolList">
          <SchoolList />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}
