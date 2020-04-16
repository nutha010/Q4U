import React from 'react';

// Layout
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

// Routing
import { Router } from "@reach/router"

// Pages
import Landing from "./Views/Landing";
import Page2 from "./Views/Page2";
import Error from "./Views/Error";

// Components
import PickupShoppingList from "./Components/PickupShoppingList/PickupShoppingList";
import PickupTimeslot from "./Components/PickupTimeslot/PickupTimeslot";
import PickupUserInfo from "./Components/PickupUserInfo/PickupUserInfo";

function App() {
  return (
    <Container className="App">
      <Router>
        <Landing path="/" />
        <Page2 path="/2" />
        <PickupShoppingList path="/pickup-shopping-list" />
        <PickupTimeslot path="/pickup-timeslot" />
        <PickupUserInfo path="/pickup-user-info" />
        <Error default/>
      </Router>
    </Container>
  );
}

export default App;
