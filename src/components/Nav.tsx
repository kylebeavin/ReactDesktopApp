import React from 'react';

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
          <Button className="NavButton" variant="outline-primary" size="sm">CRM</Button>
          <Button className="NavButton" variant="outline-primary" size="sm">Services</Button>
          <Button className="NavButton" variant="outline-primary" size="sm">Routes</Button>
          <Button className="NavButton" variant="outline-primary" size="sm">Invoices</Button>
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