import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CRM from './pages/CRM/CRM';
import Services from './pages/Services/Services';
import Routes from './pages/Routes/Routes';
import Invoices from './pages/Invoices/Invoices';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container fluid className="containerFluid">
            <Switch>
              <Redirect exact from="/" to="dashboard" />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/crm" exact component={CRM} />
              <Route path="/services" component={Services} />
              <Route path="/routes" component={Routes} />
              <Route path="/invoices" component={Invoices} />
              <Route path="/login" component={Login} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
