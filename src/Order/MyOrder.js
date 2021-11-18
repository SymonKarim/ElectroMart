import React from 'react'
import { Link } from 'react-router-dom';

const MyOrder = () => {

  return (
    <div className="text-center mt-5">
      <Link to="/my_orders" >
        <button className="btn btn-primary p-2 mx-2">My order</button>
      </Link>
      <Link to="/review" >
        <button className="btn btn-success p-2 mx-2">Make Review</button>
      </Link>
      <Link to="/payment">
        <button className="btn btn-warning p-2 mx-2">Make Payment</button>
      </Link>
    </div>
  );
}

export default MyOrder
