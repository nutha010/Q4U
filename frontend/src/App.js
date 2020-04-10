import React from 'react';

// Layout
import 'bootstrap/dist/css/bootstrap.min.css';

// Routing
import { Router, Link } from "@reach/router"

// Pages
import Landing from "./Views/Landing";
import Page2 from "./Views/Page2";
import Error from "./Views/Error";
import StoreLocator from "./Views/StoreLocator";

function App() {
  return (
    <span className="App">
      <Router>
        <Landing path="/" />
        <Page2 path="/2" />
        <StoreLocator path="/locator" />
        <Error default/>
      </Router>
    </span>
  );
}

export default App;
