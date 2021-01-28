import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CRM from "./pages/CRM/CRM";
import Services from "./pages/Services/Services";
import Routes from "./pages/Routes/Routes";
import Invoices from "./pages/Invoices/Invoices";

//Bootstrap Imports
import Container from "react-bootstrap/Container";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container fluid className="containerFluid">
            <Switch>
              {/* Home page will need to be dashboard when that pages is discussed and created */}
              <Route path="/" exact component={CRM} />
              <Route path="/services" component={Services} />
              <Route path="/routes" component={Routes} />
              <Route path="/invoices" component={Invoices} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
