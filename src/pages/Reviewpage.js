import React, { useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import Button from "../shared/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyOrder from "../Order/MyOrder";
import useAuth from "../Hooks/useAuth";
const Reviewpage = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const name = user.displayName;
  let navigate = useNavigate();
  const handleSubmitReview = (e) => {
    e.preventDefault();
   
    axios.post("http://localhost:5000/reviews", {
      rating, comment,  name
    }).then(() => navigate("/"))
  };
 
  return (
    <Container style={{ marginTop: "80px" }}>
      <h1 className="text-center">Review!</h1>
      <Form className="mb-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={user.displayName}
            readonly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rating out of 5</Form.Label>
          <Form.Control
            type="number"
            placeholder="rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Your feedback">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={(e) => setComment(e.target.value)}
          />
        </FloatingLabel>
        <br />
        <Button
          onClick={handleSubmitReview}
          btnClass="btn-warning makeOrderBtn"
          name="Submit Review"
          type="submit"
        />
      </Form>
      <MyOrder />
    </Container>
  );
};

export default Reviewpage;
