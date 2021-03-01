import React from 'react';
import { MainNav } from '../../components/sharedLayout/Nav';
import PageTitleArea from '../../components/sharedLayout/PageTitleArea';
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
