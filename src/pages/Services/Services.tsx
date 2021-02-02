import React from 'react';
import { MainNav } from '../../components/shared/Nav';
import PageTitleArea from '../../components/shared/PageTitleArea';
import ServicesTabView from '../../components/Services/ServicesTabView';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const Services = () => {
  return (
    <Container fluid className="containerFluid">
      <MainNav />
      <PageTitleArea title="Services" />
      <ServicesTabView />
    </Container>
  );
};

export default Services;
