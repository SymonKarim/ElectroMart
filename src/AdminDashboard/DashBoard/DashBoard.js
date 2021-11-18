import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MySpinner from '../../shared/MySpinner/MySpinner'
import DashBoardCard from './DashBoardCard'

const DashBoard = () => {
  const [dashBoardData, setDashBoardData] = useState({})
  const [isSpinnerActive, setIsSpinnerActive] = useState(true)
  const getData = async () => {
    await fetch(`https://obscure-harbor-46101.herokuapp.com/dashboard_data`)
      .then((res) => res.json())
      .then((data) => {
        setDashBoardData(data);
        setIsSpinnerActive(false);
      });
  }
  useEffect(() => getData(), [])
  return (
    <div className="py-3 mt-5">
      {isSpinnerActive ? (
        <MySpinner />
      ) : (
        <Container fluid>
          <Row>
            <Col md={6}>
              <DashBoardCard
                title="Products"
                total={dashBoardData.products}
                clr="bg-success text-white"
              />
            </Col>
            <Col md={6}>
              <DashBoardCard
                title="Orders"
                total={dashBoardData.orders}
                clr="bg-danger text-white"
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default DashBoard
