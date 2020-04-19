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
import PickupShoppingListPage from './Views/PickupShoppingListPage';
import PickupTimeslotPage from './Views/PickupTimeslotPage';
import PickupUserInfoPage from './Views/PickupUserInfoPage';

function App() {
  return (
    <span className="App">
      <Router>
        <Landing path="/" />
        <Page2 path="/2" />
        <PickupShoppingListPage path="/pickup-shopping-list" />
        <PickupTimeslotPage path="/pickup-timeslot" />
        <PickupUserInfoPage path="/pickup-user-info" />
        <StoreLocator path="/locator" />
        <Error default/>
      </Router>
    </span>
  );
}

export default App;
