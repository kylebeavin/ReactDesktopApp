import React from 'react';
import './routes.css';
import { MainNav } from '../../sharedLayout/Nav';
import PageTitleAreaOrders from '../../sharedLayout/PageTitleAreaOrders';
import RoutesTabView from '../RoutesTabView';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const TruckDetailLayout = () => {
  return (
    <Container fluid className="containerFluid">
      <MainNav />
      <PageTitleAreaOrders title="Routes" />
      <RoutesTabView />
    </Container>
  );
};

export default TruckDetailLayout;
