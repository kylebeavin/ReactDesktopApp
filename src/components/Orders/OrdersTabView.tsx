import React from 'react';
import WorkOrderList from './WorkOrders/WorkOrderList';
import AccountListButtons from '../CRM/AccountListButtons';
import MeetingListButtons from '../CRM/MeetingListButtons';
import MeetingList from '../CRM/MeetingList';
//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//Icons
import { MdList } from 'react-icons/md';

const OrdersTabView = () => {
  const ListTabTitle = (
    <React.Fragment>
      <MdList></MdList> Work Orders
    </React.Fragment>
  );

  return (
    <Tabs defaultActiveKey="list" transition={false} id="noanim-tab-example">
      <Tab className="ContactListTab" eventKey="list" title={ListTabTitle}>
        <Row>
          <Col className="NoPadding" md={2}>
            <AccountListButtons />
          </Col>
          <Col md={10}>
            <WorkOrderList />
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="meetings" title="Services">
        <Row>
          <Col className="NoPadding" md={2}>
            <MeetingListButtons />
          </Col>
          <Col md={10}>
            <MeetingList />
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="map" title="Map">
        <div>
          <h1>Map Coming soon!</h1>
        </div>
      </Tab>
    </Tabs>
  );
};

export default OrdersTabView;
