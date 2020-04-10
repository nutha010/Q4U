import React from 'react';

// Layout
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

// Routing
import { Router, Link } from "@reach/router"

// Pages
import Landing from "./Views/Landing";
import Page2 from "./Views/Page2";
import Error from "./Views/Error";

// Components
import PickupCustomer from "./Components/PickupCustomerForm/PickupCustomerForm";

function App() {
  return (
    <Container className="App">
      <Router>
        <Landing path="/" />
        <Page2 path="/2" />
        <PickupCustomer path="/pickup" />
        <Error default/>
      </Router>
    </Container>
  );
}

export default App;
