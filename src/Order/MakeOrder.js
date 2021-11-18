import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Input from "../shared/Input/Input";
import "./MakeOrder.css";
import Button from "./../shared/Button/Button";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const MakeOrder = () => {
  const { user } = useAuth();
  let navigate = useNavigate();
  const { id } = useParams();
  const [Address, setAddress] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderItemData, setOrderItemData] = useState({
    displayName: user.displayName,
  });
  const getProduct = async () => {
    await fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderItemData(data));
  };
  useEffect(() => getProduct());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...orderItemData,
      Address,
      pnumber,
      quantity,
      displayName: user.displayName,
      email: user.email,
      status: "Pending...",
    };

    await fetch(`http://localhost:5000/create_order/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => navigate("/my_orders"));
  };
  const handleChange = (e) => {
    const target = e.target;

    setOrderItemData({ ...orderItemData, [target.name]: target.value });
  };

  const { image, title, price } = orderItemData || {};
  return (
    <div>
      <Container>
        <div className="makeOrderFoodFormMainDiv">
          <div className="makeOrderFoodFormInnerDiv">
            <h2 className="makeOrderItemTitle">Place Order</h2>
            <form className="makeOrderFoodForm" onSubmit={handleSubmit}>
              <Input
                isFloatingLabelInput={true}
                label="displayName"
                name="displayName"
                value={user.displayName}
                type="text"
                placeholder="Name"
                onChange={handleChange}
                readOnly
              />
              <Input
                isFloatingLabelInput={true}
                label="Title"
                name="title"
                value={title}
                type="text"
                placeholder="Title"
                onChange={handleChange}
                readOnly
              />
              <Input
                isFloatingLabelInput={true}
                label="Image Source"
                name="image"
                value={image}
                type="text"
                placeholder="Image Source"
                onChange={handleChange}
                readOnly
              />
              <Input
                isFloatingLabelInput={true}
                label="Price(per piece)"
                name="price"
                value={price}
                type="number"
                placeholder="Price"
                onChange={handleChange}
                readOnly
              />

              <Input
                isFloatingLabelInput={true}
                label="Address"
                name="Address"
                value={Address}
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                isFloatingLabelInput={true}
                label="Phone Number"
                name="pnumber"
                value={pnumber}
                type="text"
                placeholder="Phone number"
                onChange={(e) => setPnumber(e.target.value)}
              />
              <Input
                isFloatingLabelInput={true}
                label="Quantity"
                name="quantity"
                value={quantity}
                type="text"
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Button
                btnClass="btn-warning makeOrderBtn"
                name="Make Order"
                type="submit"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MakeOrder;
