import React from 'react';
import WorkOrderList from './WorkOrders/WorkOrderList';
import AccountListButtons from '../CRM/AccountListButtons';
// import MeetingListButtons from '../CRM/MeetingListButtons';
import MeetingList from '../CRM/MeetingList';
import { CalendarView } from '../CRM/CalendarView';
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
      <Tab eventKey="meetings" title="Calendar">
        <Row>
          <Col className="NoPadding" md={4}>
            <MeetingList />
          </Col>
          <Col md={8}>
            <CalendarView />
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
