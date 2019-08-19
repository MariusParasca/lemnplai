import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const services = () => {
  return (
    <Container>
      <Row>
        <Col style={{ border: '1px solid black' }}>1 of 3</Col>
        <Col style={{ border: '1px solid black' }}>2 of 3</Col>
        <Col style={{ border: '1px solid black' }}>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default services;
