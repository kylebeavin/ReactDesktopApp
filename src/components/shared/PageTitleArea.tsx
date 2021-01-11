import React, { useState } from 'react';
import SearchInput from './SearchInput';
// import useForm from '../../utils/useForm';
// import NewAccountFormModal from './NewAccountFormModal';



//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const PageTitleArea = ({ title }: any) => {
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // const [state, setState] = useState({});

    // const handleChange = (e: any) => {
    //     setState(state => ({ ...state, [e.target.name]: e.target.value }))
    // }

    // eslint-disable-next-line no-empty-pattern
    // const [values, handleChange] = useForm();
    // const register = (e: any) => {
    //     e.preventDefault();
    //     console.log(values);
    // }
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
                    {/*Conditional for Create Buttons needed*/}
                    <Button className="CreateNewButton" variant="success" size="lg" onClick={handleShow}>New Account</Button>
                </Col>
            </Row>
            <hr></hr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Account Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email Address" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formGridOwner">
                                <Form.Label>Created By</Form.Label>
                                <Form.Control as="select" defaultValue="Created BY..." readOnly>
                                    <option>Choose...</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formGridStage">
                                <Form.Label>Stage</Form.Label>
                                <Form.Control as="select" defaultValue="Stage...">
                                    <option className="grayBG">Choose...</option>
                                    <option>Active</option>
                                    <option>Lead</option>
                                    <option>Prospect</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
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

export default PageTitleArea;