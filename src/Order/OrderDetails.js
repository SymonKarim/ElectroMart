import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./OrderDetails.css";
import Button from "./../shared/Button/Button";

const OrderDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    await fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => getProduct());
  const { image, title, description, price } = product || {};
  return (
    <div className="orderDetails">
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <img src={image} alt={title} className="productImage" />
            </div>
          </Col>
          <Col md={6}>
            <div className="productDescription">
              <h2 className="productDetailsTitle">{title}</h2>
              <p className="productDetailsDescription text-muted">
                {description}
              </p>
              <p className="productDetailsPrice">${price}</p>
              <Link to={`/make_order/${id}`}>
                <Button
                  btnClass="btn-warning placeOrderBtn"
                  name="Place Order"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderDetails;
