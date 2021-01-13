import React, { useState } from 'react';
// import useForm from '../utils/useForm';
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewAccountForm = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <Container>
            <Button className="CreateNewButton" variant="success" size="lg" onClick={handleShow}>New Account</Button>
            <Modal show={show} onHide={handleClose} className="accountModal">
                <Modal.Header closeButton className="newAccountHeader">
                    <Modal.Title>New Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Label>Account Name</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    // value={values.name || ""}
                                    // onChange={handleChange}
                                    type="text"
                                    name="name"
                                    placeholder="Account Name"
                                    className="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <p className="formNote">Name of the business or client</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Label>Stage</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control as="select" custom>
                                    <option>Choose...</option>
                                    <option>Lead</option>
                                    <option>Client</option>
                                    <option>Former</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Label>Assigned To</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control as="select" custom>
                                    <option>Choose...</option>
                                    <option>David Graber</option>
                                    <option>Alec Davidson</option>
                                    <option>Kyle Bevin</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Active" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <p className="formNote">Mark if Account has a contract</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Label>Address Street</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    // value={values.name || ""}
                                    // onChange={handleChange}
                                    type="text"
                                    name="name"
                                    placeholder="1234 SmashTrash Ln"
                                    className="" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Label>Address State</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control as="select" custom>
                                    <option>Choose...</option>
                                    <option>AL</option>
                                    <option>AK</option>
                                    <option>IN</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Label>Address Zip</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    // value={values.name || ""}
                                    // onChange={handleChange}
                                    type="text"
                                    name="name"
                                    placeholder="123456"
                                    className="" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Label>Email</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    // value={values.name || ""}
                                    // onChange={handleChange}
                                    type="text"
                                    name="name"
                                    placeholder="user@smashmytrash.com"
                                    className="" />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )


}

export default NewAccountForm;