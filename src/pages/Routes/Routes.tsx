import React from 'react';
import './routes.css';
import { MainNav } from '../../components/sharedLayout/Nav';
import PageTitleArea from '../../components/sharedLayout/PageTitleArea';
import RoutesTabView from '../../components/Routes/RoutesTabView';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const Routes = () => {
  return (
    <Container fluid className="containerFluid">
      <MainNav />
      <PageTitleArea title="Routes" />
      <RoutesTabView />
    </Container>
  );
};

export default Routes;
