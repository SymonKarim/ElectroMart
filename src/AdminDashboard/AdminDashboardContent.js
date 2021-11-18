import React from "react";
import { Tab } from "react-bootstrap";
import AllProducts from "../Home/AllProducts/AllProducts";
import ShowAllOrders from "../Order/ShowAllOrders";
import ShowManageAllOrders from "../Order/ShowManageAllOrders";
import AddNewItem from "../pages/AddNewItem";
import MakeAdmin from "../pages/MakeAdmin";
import Review from "../pages/Review";
import Users from "../pages/Users";
import "./AdminDashboardContent.css";
import DashBoard from "./DashBoard/DashBoard";

const AdminDashboardContent = () => {
  return (
    <div className="adminDashboardContent">
      <Tab.Content>
        <Tab.Pane eventKey="#dashboard">
          <DashBoard />
        </Tab.Pane>
        <Tab.Pane eventKey="#products">
          <AllProducts />
        </Tab.Pane>
        <Tab.Pane eventKey="#all_orders">
          <ShowAllOrders />
        </Tab.Pane>
        <Tab.Pane eventKey="#review">
          <Review />
        </Tab.Pane>
        <Tab.Pane eventKey="#manage_orders">
          <ShowManageAllOrders />
        </Tab.Pane>
        <Tab.Pane eventKey="#add_new">
          <AddNewItem />
        </Tab.Pane>
        <Tab.Pane eventKey="#users">
          <Users />
        </Tab.Pane>
        <Tab.Pane eventKey="#makeadmin">
          <MakeAdmin />
        </Tab.Pane>
      </Tab.Content>
    </div>
  );
};

export default AdminDashboardContent;
