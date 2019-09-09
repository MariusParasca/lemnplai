import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageResponsive from '../common/ImageResponsive/ImageResponsive';
import ReactImageZoom from 'react-image-zoom';

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
        <Col style={{ border: '1px solid black' }}>
          <ImageResponsive 
            src={imagesProducts('./product1.jpg')}
            width={250}
            height={250}
          />
        </Col>
        <Col style={{ border: '1px solid black' }}>

        </Col>
        <Col style={{ border: '1px solid black' }}>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default products;
