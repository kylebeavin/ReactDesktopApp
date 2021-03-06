import CRMTabView from '../../components/CRM/CRMTabView';
import { MainNav } from '../../components/sharedLayout/Nav';
import PageTitleArea from '../../components/sharedLayout/PageTitleArea';
import React from 'react';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const CRM = () => {
  return (
    <Container fluid className="containerFluid">
      <MainNav />
      <PageTitleArea title="CRM" />
      <CRMTabView />
    </Container>
  );
};

export default CRM;
