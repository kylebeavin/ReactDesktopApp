import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CRM from './pages/CRM/CRM';
import Services from './pages/Services/Services';
import Routes from './pages/Routes/Routes';
import Invoices from './pages/Invoices/Invoices';
// import { MainNav } from './components/shared/Nav';
// import PageTitleArea from './components/shared/PageTitleArea';
// import CRMTabView from './components/CRM/CRMTabView';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container fluid>
            {/* <MainNav /> */}
            <Switch>
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
