import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import useAuth from '../Hooks/useAuth';
import './AdminDashboardSidebar.css'

const AdminDashboardSidebar = () => {
  const { handleLogOut,user } = useAuth();
  return (
    <ListGroup className="adminDashboardSidebar bg-light">
      <ListGroup.Item action href="">
        <i className="fas fa-user-shield text-danger"></i>
        <span className="text-uppercase fw-bold p-2"> Admin</span>
      </ListGroup.Item>
      <ListGroup.Item action href="#dashboard">
        <i className="fas fa-home text-primary"></i> Dashboard
      </ListGroup.Item>
      <ListGroup.Item action href="#users">
        <i className="fas fa-user text-primary"></i> All User
      </ListGroup.Item>
      <ListGroup.Item action href="#review">
        <i className="fas fa-retweet text-primary"></i> Reviews
      </ListGroup.Item>
      <ListGroup.Item action href="#all_orders">
        <i className="fab fa-first-order text-primary"></i> All Orders
      </ListGroup.Item>
      <ListGroup.Item action href="#manage_orders">
        <i className="fas fa-tasks text-primary"></i> Manage Orders
      </ListGroup.Item>
      <ListGroup.Item action href="#add_new">
        <i class="fas fa-plus-square text-primary"></i> Add New
      </ListGroup.Item>
      <ListGroup.Item action href="#makeadmin">
        <i className="fas fa-plane text-primary"></i> Make Admin
      </ListGroup.Item>

      <ListGroup.Item action href="#logout">
        <Button className="btn btn-danger text-white fw-bolder w-100" onClick={handleLogOut}>
          <i className="fas fa-sign-out-alt  text-white"></i> Logout
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default AdminDashboardSidebar
