import React from 'react';
import SearchInput from './SearchInput';
// import useForm from '../../utils/useForm';
// import NewAccountFormModal from './NewAccountFormModal';



//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsQuestionCircleFill } from 'react-icons/bs';
import NewAccountForm from '../CRM/NewAccountForm';
// import Modal from 'react-bootstrap/Modal';


const PageTitleArea = ({ title }: any) => {
    return (
        <Container fluid className="containerFluid">
            <Row className="noMarginRight">
                <Col md={2}>
                    <div className="PageTitle">
                        <h1>{title}</h1>
                    </div>
                </Col>
                <Col>
                    <BsQuestionCircleFill className="HelpInfo" size={30} />
                </Col>
                <Col md={7}>
                    <SearchInput />
                </Col>
                <Col md={2}>
                    {/*Includes New Account Button*/}
                    <NewAccountForm />
                </Col>
            </Row>
            <hr></hr>
        </Container>


    )
}

export default PageTitleArea;