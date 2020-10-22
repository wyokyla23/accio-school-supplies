import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Invitation from "./Invitation";
import SchoolList from "./SchoolList";
import Shop from "./Shop";
import Cart from './Cart'

export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Invitation
            name={name}
            setName={setName}
          />
        </Route>
        <Route exact path="/schoolList">
          <SchoolList name={name} />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
