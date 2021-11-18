import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../shared/Input/Input';
import cardData from './cardData';
import './contact.css';
import ContactCard from './ContactCard';


const Contact = () => {
  return (
    <Container style={{ minHeight: "85vh" }}>
      <div className="contact">
        <h1 className="contact_title">Contact Us</h1>
        <p className="text-center fs-5">
          ElectroMart is an e-commerce platform which will be capable of
          providing every kind of goods and products from every sector to every
          consumer located in Bangladesh.
        </p>

        <Row className="mb-3">
          {cardData.map((data, index) => (
            <Col md={3} className="d-flex align-items-stretch g-3">
              <ContactCard key={index} data={data} />
            </Col>
          ))}
        </Row>
        <div className="col-12 text-center my-5">
          <h1 className="text-danger footer-header">News letter</h1>
          <p className="footer-description">
            We are ElectroMart, an e-commerce platform for selling electronic
            gadgets and accessories specially laptops, personal computers, and
            mobile.. Rapidly we are growing and it is important to listen from
            clients to keep pace with our competitors so we want to grow our
            comminity as big as possible. Please subscribe our special features
            of Newsletter and fly with us. We need your support to grow our
            comminity.
          </p>
          <div className="subscribe-form">
            <Input
              isFloatingLabelInput={true}
              label="Enter your email"
              name="email"
              value=""
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className="btn btn-primary">subscribe now</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
