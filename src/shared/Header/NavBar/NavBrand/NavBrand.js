import React from "react";
import "./NavBrand.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <Navbar.Brand>
      <Link to="/" className="brandTitle">
        <span>
          ELECTRO<span className="text-danger">MART</span>
        </span>
      </Link>
    </Navbar.Brand>
  );
};

export default NavBrand;
