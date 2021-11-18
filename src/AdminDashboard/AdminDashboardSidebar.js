import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import useAuth from '../Hooks/useAuth';
import './AdminDashboardSidebar.css'

const AdminDashboardSidebar = () => {
  const { handleLogOut } = useAuth();
  return (
    <ListGroup className="adminDashboardSidebar bg-light">
      <ListGroup.Item action href="#dashboard">
        <i className="fas fa-home"></i> Dashboard
      </ListGroup.Item>
      <ListGroup.Item action href="#users">
        <i className="fas fa-user"></i> All User
      </ListGroup.Item>
    
      <ListGroup.Item action href="#all_orders">
        <i className="fab fa-first-order"></i> All Orders
      </ListGroup.Item>
      <ListGroup.Item action href="#manage_orders">
        <i className="fas fa-tasks"></i> Manage Orders
      </ListGroup.Item>
      <ListGroup.Item action href="#add_new">
        <i className="fas fa-list"></i> Add New
      </ListGroup.Item>
      <ListGroup.Item action href="#makeadmin">
        <i className="fas fa-plane"></i> Make Admin
      </ListGroup.Item>

      <ListGroup.Item action href="#logout">
        <Button className="btn btn-warning w-100"onClick={handleLogOut}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default AdminDashboardSidebar
