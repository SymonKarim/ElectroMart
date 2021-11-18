import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./AllProducts.css";

import { Link } from "react-router-dom";
import Button from "./../../shared/Button/Button";
import Footer from "../../shared/Footer/Footer";


const AllProducts = () => {
  const [Products, setProducts] = useState([]);
  const getData = async () => {
    await fetch("https://obscure-harbor-46101.herokuapp.com/all_items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="allProducts">
        <Container>
          <h2 className="products__title">Our Products</h2>
          <p className="text-center text-muted products__subtitle">
            ElectroMart is an e-commerce website developed for selling
            Electronic gadgets and accessories specially laptops, personal
            computers and smartphones. At the beginning, we are focusing on
            selling laptops later we will start to sell other electronic
            products. Buy our products and lets us Grow..
          </p>
          <Row>
            {Products.map((product, index) => (
              <Col
                lg={4}
                md={6}
                className="d-flex align-items-stretch gy-3"
                key={index}
              >
                <Card className="w-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="productImage"
                  />
                  <Card.Body>
                    <Card.Title className="productCardTitle">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="productCardDescription text-muted">
                      {product.description.substr(0, 100)}
                    </Card.Text>
                    <Card.Text className="productCardPrice">
                      <strong>${product.price}</strong>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <Link to={`/product/${product._id}`}>
                      <Button
                        btnClass="btn-warning w-100 orderBtn"
                        name="See Details"
                      />
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
