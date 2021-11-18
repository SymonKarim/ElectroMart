import React from "react";
import { Routes, Route } from "react-router-dom";
import AllOrders from "./pages/AllOrders";
import Home from "./pages/Home";
import AddNewItem from "./pages/AddNewItem";
import Order from "./pages/Order";
import OrderCreate from "./pages/OrderCreate";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Aboutus from "./pages/Aboutus";
import AllProducts from "./Home/AllProducts/AllProducts";
import ShowMyOrders from "./Order/ShowMyOrders";
import MakeAdmin from "./pages/MakeAdmin";
import Reviewpage from "./pages/Reviewpage";
import Payment from "./pages/Payment";
import Users from "./pages/Users";
import PrivateRoute from "./Hooks/PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/all_orders"
        element={
          <PrivateRoute>
            <AllOrders />
          </PrivateRoute>
        }
      />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/products" element={<AllProducts />} />
      <Route
        path="/my_orders"
        element={
          <PrivateRoute>
            <ShowMyOrders />
          </PrivateRoute>
        }
      />
      <Route
        path="/add_new_item"
        element={
          <PrivateRoute>
            <AddNewItem />
          </PrivateRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        }
      />
      <Route
        path="/make_order/:id"
        element={
          <PrivateRoute>
            <OrderCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/makeadmin"
        element={
          <PrivateRoute>
            <MakeAdmin />
          </PrivateRoute>
        }
      />
      <Route
        path="/review"
        element={
          <PrivateRoute>
            <Reviewpage />
          </PrivateRoute>
        }
      />
    
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
