import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductThumbnail from '../common/ProductThumbnail/ProductThumbnail';

// @ts-ignore
const imagesProducts = require.context(
  '../../../public/assets/images/products',
  false,
  /^.*\.jpg$/
);

const BASE_IMAGE_NAME = 'product';
const IMAGE_EXTENSION = "jpg";

const products = () => {

  const getProducts = (numberOfItems) => {
    const productsCols = [];
    for (let i = 1; i <= numberOfItems; i++) {
      const imageName = `./${BASE_IMAGE_NAME}${i}.${IMAGE_EXTENSION}`;
      productsCols.push(
        <Col lg={4} md={6} sm={12} xs={12}  key={imageName} >
          <ProductThumbnail  
            src={imagesProducts(imageName)}
            title={`Product ${i}`}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </Col>
      );
    }
    return productsCols;
 }

  return (
    <Container className='mt-5'>
      <Row>
        {getProducts(3)}
      </Row>
    </Container>
  );
};

export default products;
