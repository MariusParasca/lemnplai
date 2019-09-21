import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductThumbnail from '../common/ProductThumbnail/ProductThumbnail';

// @ts-ignore
const imagesProducts = require.context(
  '../../../public/assets/images/products',
  false,
  /^.*\.jpg$/
);

const products = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={3} md={2}>
          <ProductThumbnail  src={imagesProducts('./product1.jpg')}/>
        </Col>
        <Col>

        </Col>
        <Col >3 of 3</Col>
      </Row>
    </Container>
  );
};

export default products;
