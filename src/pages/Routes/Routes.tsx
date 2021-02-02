import React from 'react';
import { MainNav } from '../../components/shared/Nav';
import PageTitleArea from '../../components/shared/PageTitleArea';
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
