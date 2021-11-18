import React from 'react'
import { Col, Tab } from 'react-bootstrap'
import AdminDashboardContent from '../AdminDashboard/AdminDashboardContent'
import AdminDashboardSidebar from '../AdminDashboard/AdminDashboardSidebar'

const AdminDashboard = () => {
  return (
    <Tab.Container defaultActiveKey="#dashboard">
      <div style={{ paddingTop: '4.5rem' }} className="d-md-flex">
        <Col md={3}>
          <AdminDashboardSidebar />
        </Col>
        <Col md={9}>
          <AdminDashboardContent />
        </Col>
      </div>
    </Tab.Container>
  )
}

export default AdminDashboard
