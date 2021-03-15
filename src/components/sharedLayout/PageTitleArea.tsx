import React from 'react';
import SearchInput from './SearchInput';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsQuestionCircleFill } from 'react-icons/bs';
import NewAccountForm from '../CRM/NewAccountForm';
import NewOrderForm from '../Orders/WorkOrders/NewOrderForm';
import NewRouteForm from '../Routes/NewRouteForm';
import NewInvoiceForm from '../Invoices/NewInvoiceForm';
// import Modal from 'react-bootstrap/Modal';

interface ITitle {
  title: string;
}

const PageTitleAreaOrders = ({ title }: ITitle) => {
  const NewButton = () => {
    if (title === 'Dashboard') {
      return <NewAccountForm />;
    } else if (title === 'CRM') {
      return <NewAccountForm />;
    } else if (title === 'Orders') {
      return <NewOrderForm />;
    } else if (title === 'Routes') {
      return <NewRouteForm />;
    } else if (title === 'Invoices') {
      return <NewInvoiceForm />;
    }
  };
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
        <Col md={2}>{NewButton()}</Col>
      </Row>
      <hr></hr>
    </Container>
  );
};

export default PageTitleAreaOrders;
