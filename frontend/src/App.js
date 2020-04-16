import React from 'react';

// Layout
import 'bootstrap/dist/css/bootstrap.min.css';

// Routing
import { Router } from "@reach/router"

// Pages
import Landing from "./Views/Landing";
import Page2 from "./Views/Page2";
import Error from "./Views/Error";
import StoreLocator from "./Views/StoreLocator";

// Components
import PickupShoppingList from "./Components/PickupShoppingList/PickupShoppingList";
import PickupTimeslot from "./Components/PickupTimeslot/PickupTimeslot";
import PickupUserInfo from "./Components/PickupUserInfo/PickupUserInfo";

function App() {
  return (
    <span className="App">
      <Router>
        <Landing path="/" />
        <Page2 path="/2" />
        <PickupShoppingList path="/pickup-shopping-list" />
        <PickupTimeslot path="/pickup-timeslot" />
        <PickupUserInfo path="/pickup-user-info" />
        <StoreLocator path="/locator" />
        <Error default/>
      </Router>
    </span>
  );
}

export default App;
