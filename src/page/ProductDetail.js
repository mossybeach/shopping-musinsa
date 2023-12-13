import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();
  const getProductDetail = async () => {
    setLoading(true);
    const url = `https://my-json-server.typicode.com/typicode/mossybeach/shopping-musinsa/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">₩{product?.price}</div>
          <div className="choice">
            {product?.choice ? "Conscious Choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              select size
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action">
                    {item}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            select
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
