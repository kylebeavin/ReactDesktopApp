import React from 'react';
import { MainNav } from '../../components/shared/Nav';
import PageTitleArea from '../../components/shared/PageTitleArea';
import Summary from '../../components/Dashboard/Summary';
import Status from '../../components/Dashboard/Status';
import IncomeReports from '../../components/Dashboard/IncomeReports';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = () => {
  return (
    <Container fluid className="containerFluid">
      <MainNav />
      <PageTitleArea title="Dashboard" />

      <Row>
        <Col xs={6} md={4}>
          <Summary />
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col>
              <Status />
            </Col>
          </Row>
          <Row>
            <Col>
              <IncomeReports />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
