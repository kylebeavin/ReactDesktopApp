import React from 'react';
import RouteList from '../Routes/RouteList';
import AccountListButtons from '../CRM/AccountListButtons';
import MeetingListButtons from '../CRM/MeetingListButtons';
import TruckList from '../Routes/TruckList';

//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//Icons
import { MdList } from 'react-icons/md';

const RoutesTabView = () => {
  const ListTabTitle = (
    <React.Fragment>
      <MdList></MdList> Routes
    </React.Fragment>
  );

  return (
    <Tabs defaultActiveKey="list" transition={false} id="noanim-tab-example">
      <Tab
        className="ContactListTab"
        eventKey="list"
        title={ListTabTitle}
        pageTitle="Routes"
      >
        <Row>
          <Col className="NoPadding" md={2}>
            <AccountListButtons />
          </Col>
          <Col md={10}>
            <RouteList />
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="trucks" title="Trucks" pageTitle="Trucks">
        <Row>
          <Col className="NoPadding" md={2}>
            <MeetingListButtons />
          </Col>
          <Col md={10}>
            <TruckList />
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="map" title="Map">
        <div>
          <h1>Map Works!</h1>
        </div>
      </Tab>
    </Tabs>
  );
};

export default RoutesTabView;
