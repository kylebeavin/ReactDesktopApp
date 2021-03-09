import React from 'react';
import { MainNav } from '../../components/sharedLayout/Nav';
import PageTitleArea from '../../components/sharedLayout/PageTitleArea';
import OrdersTabView from '../../components/Orders/OrdersTabView';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const Orders = () => {
  return (
    <Container fluid className="containerFluid">
      <MainNav />
      <PageTitleArea title="Orders" />
      <OrdersTabView />
    </Container>
  );
};

export default Orders;
