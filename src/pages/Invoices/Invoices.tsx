import React from 'react';
import { MainNav } from '../../components/shared/Nav';
import PageTitleArea from '../../components/shared/PageTitleArea';
import InvoicesTabView from '../../components/Invoices/InvoicesTabView';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const Invoices = () => {
  return (
    <Container fluid className="containerFluid">
      <MainNav />
      <PageTitleArea title="Invoices" />
      <InvoicesTabView />
    </Container>
  );
};

export default Invoices;
