import CRMTabView from '../../components/CRM/CRMTabView';
import { MainNav } from '../../components/shared/Nav';
import PageTitleArea from '../../components/shared/PageTitleArea';
import React from 'react';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const CRM = () => {
    return (
        <Container fluid>
            <MainNav />
            <PageTitleArea />
            <CRMTabView />
        </Container>
    )
}

export default CRM
