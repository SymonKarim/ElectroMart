import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-white mt-4 mb-0 pb-0" style={{ backgroundColor: "#728FCE" }}>
      <div className="container">
        <footer>
          <div className="py-3">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-white ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/My_orders" className="nav-link px-2 text-white">
                  My Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link px-2 text-white">
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link px-2 text-white">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Review" className="nav-link px-2 text-white">
                  Review
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span>
                ELECTRO<span className="text-warning">MART</span>
              </span>
              <span className="text-white">&copy; 2021 Company, SYMON</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                  alt="facebook"
                  className="footerIcon"
                />
              </li>
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  alt="instagram"
                  className="footerIcon"
                />
              </li>
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="linkedIn"
                  className="footerIcon"
                />
              </li>
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt="Github"
                  className="footerIcon"
                />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
