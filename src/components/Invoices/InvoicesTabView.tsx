import React from 'react';
import AccountList from '../CRM/AccountList';
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

const InvoicesTabView = () => {
  const ListTabTitle = (
    <React.Fragment>
      <MdList></MdList> List
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
            <AccountList />
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="meetings" title="Invoices">
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
          <h1>Map Works!</h1>
        </div>
      </Tab>
    </Tabs>
  );
};

export default InvoicesTabView;
