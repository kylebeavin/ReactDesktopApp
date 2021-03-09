import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CRM from './pages/CRM/CRM';
import Orders from './pages/Orders/Orders';
import Routes from './pages/Routes/Routes';
import Invoices from './pages/Invoices/Invoices';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Container fluid className="containerFluid">
            <Switch>
              <Redirect exact from="/" to="dashboard" />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/crm" component={CRM} />
              <Route path="/orders" component={Orders} />
              <Route path="/routes" component={Routes} />
              <Route path="/invoices" component={Invoices} />
              <Route path="/login" component={Login} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
