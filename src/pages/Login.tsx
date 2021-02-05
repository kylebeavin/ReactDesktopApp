import React from 'react';
import LoginNavBanner from '../components/Login/LoginNavBanner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { GiBulldozer } from 'react-icons/gi';

const Login = () => {
  return (
    <Container fluid className="containerFluid">
      <LoginNavBanner />
      <Row>
        <Col>
          <h2>Login</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <GiBulldozer size={180} />
        </Col>
      </Row>

      <Row>
        <Col>
          <input type="email" placeholder="Email" />
        </Col>
      </Row>

      <Row>
        <Col>
          <input type="password" placeholder="Password" />
        </Col>
      </Row>
      <Row>
        <Col>
          <button type="submit">Login</button>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
