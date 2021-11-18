import React from 'react'

const DashBoardCard = ({ clr, title, total }) => {
  return (
      <div className={`card ${clr}`}>
      <div className="card-body">
        <h5 className="text-center text-uppercase">{title}</h5>
        <h3 className="text-center">{total}</h3>
      </div>
    </div>
  )
}

export default DashBoardCard
