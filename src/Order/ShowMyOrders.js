import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "./ShowAllOrders.css";
import Button from "./../shared/Button/Button";
import MySpinner from "../shared/MySpinner/MySpinner";
import Footer from "../shared/Footer/Footer";
import MyOrder from "./MyOrder";
import useAuth from "../Hooks/useAuth";
  // await fetch(`https://obscure-harbor-46101.herokuapp.com/all_orders`);
const ShowMyOrders = () => {
  const { user } = useAuth();

  const [allOrders, setAllOrders] = useState([]);
  const [isSpinnerActive, setIsSpinnerActive] = useState(true);
  const getAllOrders = async () => {
    await fetch(`https://obscure-harbor-46101.herokuapp.com/all_orders`)
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((order) => order.email === user.email);
        setAllOrders(myOrders);
        setIsSpinnerActive(false);
      });
  };
  useEffect(() => getAllOrders());
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
    <>
      <section className="showAllOrders">
        <Container>
          <h2 className="showAllOrders__Title">My Orders</h2>
          {isSpinnerActive ? (
            <MySpinner />
          ) : (
            <>
              <small className="text-danger fw-bold">
                Warning! You can order a Laptop once
              </small>
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
                        {parseInt(order.price * order.quantity) +
                          deliveryCharge}
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
                          btnClass="btn-danger"
                          name="Cancel"
                          onClick={() => deleteOrder(order._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Container>
        <Container className="mt-5">
          <MyOrder />
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ShowMyOrders;
