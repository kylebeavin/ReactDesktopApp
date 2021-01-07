import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAccountCircle, MdSettings } from 'react-icons/md';



export const MainNav = () => {
  return (
    <div className="Nav">
      <Row>
        <Col md={2}>
          <div className="LeftNav">
            <MdSettings size={40} className="SettingsGear" />
            <span>Settings</span>
          </div>
        </Col>
        <Col md={3}>
          <Button className="FranchiseButton" variant="primary" size="lg">FranchiseName</Button>
        </Col>
        <Col md={5}>
          <Link to='/'>
            <Button className="NavButton" variant="outline-primary" size="sm">CRM</Button>
          </Link>
          <Link to='/services'>
            <Button className="NavButton" variant="outline-primary" size="sm">Services</Button>
          </Link>
          <Link to='/routes'>
            <Button className="NavButton" variant="outline-primary" size="sm">Routes</Button>
          </Link>
          <Link to='/invoices'>
            <Button className="NavButton" variant="outline-primary" size="sm">Invoices</Button>
          </Link>
        </Col>
        <Col md={2}>
          <div className="RightNav">
            <MdAccountCircle size={40} className="DashboardIcon" />
            <span>Dashboard</span>
          </div>
        </Col>
      </Row>

    </div>
  );
}