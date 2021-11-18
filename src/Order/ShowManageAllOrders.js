import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "./ShowManageAllOrders.css";
import Button from "./../shared/Button/Button";
import MySpinner from "../shared/MySpinner/MySpinner";

const ShowManageAllOrders = () => {
  const [isSpinnerActive, setIsSpinnerActive] = useState(true);
  const [allOrders, setAllOrders] = useState([]);
  const getAllOrders = async () => {
    await fetch(`https://obscure-harbor-46101.herokuapp.com/all_orders`)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        setIsSpinnerActive(false);
      });
  };
  useEffect(() => getAllOrders(), []);
  const updateStatus = async (id) => {
    await fetch(
      `https://obscure-harbor-46101.herokuapp.com/updateStatus/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => getAllOrders());
  };
  const deleteOrder = async (id) => {
    const per = window.confirm("Do you really want to delete?");
    per &&
      (await fetch(
        `https://obscure-harbor-46101.herokuapp.com/delete_order/${id}`,
        {
          method: "DELETE",
        }
      ).then(() => getAllOrders()));
  };
  let deliveryCharge = 100;
  return (
    <div className="showAllOrders">
      <Container>
        <h2 className="showAllOrders__Title">Manage Orders</h2>
        {isSpinnerActive ? (
          <MySpinner />
        ) : (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th className="text-center p-2">Name</th>
                <th className="text-center p-2">pnumber</th>
                <th className="text-center p-2">Image</th>
                <th className="text-center p-2">Title</th>
                <th className="text-center p-2">Address</th>
                <th className="text-center p-2">Price($)</th>
                <th className="text-center p-2">Quantity</th>
                <th className="text-center p-2">Delivery Charge</th>
                <th className="text-center p-2">Total($)</th>
                <th className="text-center p-2">Status</th>
                <th className="text-center p-2">Approve</th>
                <th className="text-center p-2">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => (
                <tr key={order._id}>
                  <td className="text-center p-2">{order.displayName}</td>
                  <td className="text-center p-2">{order.pnumber}</td>
                  <td className="text-center p-2">
                    <img
                      src={order.image}
                      alt={order.title}
                      className="orderItem__Image"
                    />
                  </td>
                  <td className="text-center p-2">
                    <span>{order.title}</span>
                  </td>
                  <td className="text-center p-2">{order.Address}</td>
                  <td className="text-center p-2">{order.price}</td>
                  <td className="text-center p-2">{order.quantity}</td>

                  <td className="text-center p-2">{deliveryCharge}</td>
                  <td className="text-center p-2">
                    {parseInt(order.price * order.quantity) + deliveryCharge}
                  </td>
                  <td className="text-center p-2">
                    <span
                      className={`fw-bold text-${
                        order.status === "Pending..." ? "danger" : "success"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="text-center p-2">
                    <Button
                      btnClass="btn-success"
                      name="Approved"
                      onClick={() => updateStatus(order._id)}
                    />
                  </td>
                  <td className="text-center p-2">
                    <Button
                      btnClass="btn-danger"
                      name="Cancel"
                      onClick={() => deleteOrder(order._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default ShowManageAllOrders;
