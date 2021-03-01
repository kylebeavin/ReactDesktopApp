import React, { useState } from 'react';
import baseURL from '../../api/BaseInstance';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//New Account Form

const NewAccountForm = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [accountFormData, setAccountFormData] = useState({});

  const handleShowAccount = () => setShowAccount(true);
  const handleCloseAccount = () => setShowAccount(false);

  const handleChange = (e: any) => {
    setAccountFormData({ ...accountFormData, [e.target.name]: e.target.value });
  };
  const addAccount = async () => {
    const response = await baseURL
      .post('/accounts', accountFormData, {
        headers: {
          'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
        },
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    if (response) {
      handleCloseAccount();
    }
  };

  return (
    <Container>
      <Button
        className="CreateNewButton"
        variant="success"
        size="lg"
        onClick={handleShowAccount}
      >
        New Account
      </Button>
      <Modal
        show={showAccount}
        onHide={handleCloseAccount}
        className="accountModal"
      >
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
                  onChange={handleChange}
                  type="text"
                  name="account_name"
                  placeholder="Account Name"
                  className=""
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <p className="formNote">*Name of the business or client</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Stage</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="stage"
                  as="select"
                  onChange={handleChange}
                  custom
                >
                  <option>Choose...</option>
                  <option>Prospect</option>
                  <option>Lead</option>
                  <option>Account</option>
                </Form.Control>
              </Col>
            </Row>
            {/* <br />
            <Row>
                            <Col xs={12} md={8}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Active" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <p className="formNote">*Mark if Account has an active contract</p>
                            </Col>
                        </Row> */}
            {/* <Row>
              <Col xs={12} md={8}>
                <Form.Label>Active</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="is_active"
                  placeholder="set to true"
                  className=""
                />
              </Col>
            </Row> */}
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Address Street</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="address_street"
                  placeholder="1234 SmashTrash Ln"
                  className=""
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Address City</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  // value={values.name || ""}
                  onChange={handleChange}
                  type="text"
                  name="address_city"
                  placeholder="Indianapolis"
                  className=""
                />
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
                <Form.Control
                  name="address_state"
                  as="select"
                  onChange={handleChange}
                  custom
                >
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
                  onChange={handleChange}
                  type="text"
                  name="address_zip"
                  placeholder="123456"
                  className=""
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Map Location (Lat,Long)</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="geo_location"
                  placeholder="00.00,00.00"
                  className=""
                />
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
                  onChange={handleChange}
                  type="text"
                  name="email"
                  placeholder="user@smashmytrash.com"
                  className=""
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Group ID</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={handleChange}
                  name="group_id"
                  as="input"
                  placeholder="groupID"
                  className=""
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Owner ID</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={handleChange}
                  name="owner_id"
                  as="input"
                  placeholder="ownerID"
                  className=""
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Owner Name</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={handleChange}
                  name="owner_name"
                  as="input"
                  placeholder="ownerName"
                  className=""
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAccount}>
            Close
          </Button>
          <Button variant="primary" onClick={addAccount}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default NewAccountForm;
