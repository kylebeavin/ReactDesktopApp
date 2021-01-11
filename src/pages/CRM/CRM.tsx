import CRMTabView from '../../components/CRM/CRMTabView';
import { MainNav } from '../../components/shared/Nav';
import PageTitleArea from '../../components/shared/PageTitleArea';
import React from 'react';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const CRM = () => {
    // console.log(process.env.REACT_APP_ACCESS_TOKEN)
    return (
        <Container fluid className="containerFluid">
            <MainNav />
            <PageTitleArea title="CRM" />
            <CRMTabView />
        </Container>
    )
}

export default CRM;
