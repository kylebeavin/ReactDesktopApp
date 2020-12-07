import React from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';


export const MainNav = () => {
  return (
    <div className="Nav">
      <Navbar bg="light" variant="light">
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
        <Button variant="primary" size="lg">Franchise</Button>{' '}
        <Button variant="outline-primary" size="sm">CRM</Button>{' '}
        <Button variant="outline-primary" size="sm">Services</Button>{' '}
        <Button variant="outline-primary" size="sm">Routes</Button>{' '}
        <Button variant="outline-primary" size="sm">Invoices</Button>{' '}
      </Navbar>


    </div>
  );
}