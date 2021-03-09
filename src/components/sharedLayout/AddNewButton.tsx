import React from 'react';
// import baseURL from '../../api/BaseInstance';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const AddNewButton = () => {
  return (
    <Container>
      <Button className="CreateNewButton" variant="success" size="lg">
        New Account
      </Button>
    </Container>
  );
};

export default AddNewButton;
