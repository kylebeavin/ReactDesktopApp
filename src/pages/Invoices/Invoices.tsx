import React from 'react';
import { MainNav } from '../../components/shared/Nav';
import PageTitleArea from '../../components/shared/PageTitleArea';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const Invoices = () => {
    return (
        <Container fluid className="containerFluid">
            <MainNav />
            <PageTitleArea title="Invoices" />
        </Container>
    )
}

export default Invoices;
