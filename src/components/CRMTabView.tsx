import React from 'react';
import AccountList from './AccountList';
import AccountListButtons from './AccountListButtons';
import CalendarView from './CalendarView';

//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//Icons
import { MdList } from 'react-icons/md';

const CRMTabView = () => {

    const ListTabTitle =
        <React.Fragment>
            <MdList></MdList> List
    </React.Fragment>;

    return (
        <Tabs
            defaultActiveKey="list"
            transition={false}
            id="noanim-tab-example"
        >
            <Tab className="ContactListTab" eventKey="list" title={ListTabTitle}>
                <Row>
                    <Col className="NoPadding" md={2}>
                        <AccountListButtons />
                    </Col>
                    <Col className="NoPadding" md={10}>
                        <AccountList />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="calendar" title="Calendar">
                <Row>
                    <Col className="NoPadding" md={3}>
                        <AccountListButtons />
                    </Col>
                    <Col className="NoPadding" md={9}>
                        <CalendarView />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="map" title="Map">
                <div>
                    <h1>Map Works!</h1>
                </div>
            </Tab>
        </Tabs >
    )
}

export default CRMTabView;