import React, { useState } from 'react';
import baseURL from '../../api/BaseInstance';
import DatePicker from 'react-datepicker';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//New Account Form

const NewRouteForm = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [orderFormData, setOrderFormData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleShowOrder = () => setShowOrder(true);
  const handleCloseOrder = () => setShowOrder(false);

  const handleChange = (e: any) => {
    setOrderFormData({ ...orderFormData, [e.target.name]: e.target.value });
  };
  const addOrder = async () => {
    const response = await baseURL
      .post('/order', orderFormData, {
        headers: {
          'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
        },
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    if (response) {
      handleCloseOrder();
    }
  };

  return (
    <Container>
      <Button
        className="CreateNewButton"
        variant="success"
        size="lg"
        onClick={handleShowOrder}
      >
        New Route
      </Button>
      <Modal
        show={showOrder}
        onHide={handleCloseOrder}
        className="accountModal"
      >
        <Modal.Header closeButton className="newAccountHeader">
          <Modal.Title>New Route</Modal.Title>
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
                  name="account_id"
                  as="select"
                  onChange={handleChange}
                  custom
                >
                  <option>Choose...</option>
                  <option value="6011a87cf556150022792a53">
                    Whole Foods - Carmel
                  </option>
                  <option value="6011cbb8f556150022792a58">
                    Westpark at Springmill
                  </option>
                  <option value="60131757ad6c98002233b14f">
                    Hamilton Wood
                  </option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <p className="formNote">*Name of the business or client</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Order Status</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="order_status"
                  as="select"
                  placeholder="Choose..."
                  onChange={handleChange}
                  custom
                >
                  <option>Not Started</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </Form.Control>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Demand Rate</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="demand_rate"
                  placeholder="500.00"
                  className=""
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Monthly Rate</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  // value={values.name || ""}
                  onChange={handleChange}
                  type="text"
                  name="monthly_rate"
                  placeholder="500.00"
                  className=""
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Term</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  // value={values.name || ""}
                  onChange={handleChange}
                  type="text"
                  name="term_date"
                  placeholder="12"
                  className=""
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Start Date</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <DatePicker
                  name="start_date"
                  selected={startDate}
                  onChange={(date: any) => setStartDate(date)}
                  todayButton="Today"
                  isClearable
                />
                {/* <Form.Control
                  // value={values.name || ""}
                  onChange={handleChange}
                  type="text"
                  name="start_date"
                  placeholder="4/16/2021"
                  className=""
                >
                  {startDate}
                </Form.Control> */}
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>End Date</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <DatePicker
                  name="end_date"
                  selected={endDate}
                  onChange={(date: any) => setEndDate(date)}
                  todayButton="Today"
                  isClearable
                />

                {/* <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="geo_location"
                  placeholder="00.00,00.00"
                  className=""
                /> */}
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Terms &amp; Conditions</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.File
                  name="url"
                  id="custom-file"
                  label="Custom file input"
                  custom
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Notes</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  // value={values.name || ""}
                  onChange={handleChange}
                  type="text"
                  name="notes"
                  placeholder="Leave notes here.."
                  as="textarea"
                  rows={3}
                  className=""
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseOrder}>
            Close
          </Button>
          <Button variant="primary" onClick={addOrder}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default NewRouteForm;
