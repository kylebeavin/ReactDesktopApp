import React from 'react';
import '../styles/nav.css';
// Bootstrap Imports
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAccountCircle, MdSettings } from 'react-icons/md';

export const MainNav = () => {
  return (
    <div className="Nav">


      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      <Row>
        <Col md={4}>
          <MdSettings size={40} className="SettingsGear" />
          <Button className="FranchiseButton" variant="primary" size="lg">FranchiseName</Button>{' '}
        </Col>
        <Col md={8}>
          <Button className="NavButton" variant="outline-primary" size="sm">CRM</Button>{' '}
          <Button className="NavButton" variant="outline-primary" size="sm">Services</Button>{' '}
          <Button className="NavButton" variant="outline-primary" size="sm">Routes</Button>{' '}
          <Button className="NavButton" variant="outline-primary" size="sm">Invoices</Button>{' '}
          <MdAccountCircle size={40} className="DashboardIcon" />
        </Col>
      </Row>

    </div>
  );
}