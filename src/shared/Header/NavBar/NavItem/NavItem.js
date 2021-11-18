import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavItem.css";
import Button from "../../../Button/Button";

import useAuth from "../../../../Hooks/useAuth";
// import useAuth from "../../../../Context/AuthProvider";
const Navitem = () => {
  const { user, handleLogOut, admin } = useAuth();
  const activeStyle = "activeStyle";  
  const navLinkClass = `nav-link navItemTitle`;
  const getNavLinkActiveClass = ({ isActive }) =>
    [navLinkClass, isActive && activeStyle].filter(Boolean).join(" ");
  return (
    <Nav className="navItem ms-auto my-2 my-lg-0">
      <NavLink to="/" className={getNavLinkActiveClass}>
        Home
      </NavLink>
      <NavLink to="/products" className={getNavLinkActiveClass}>
        Products
      </NavLink>
      {!admin && (
        <NavLink to="/my_orders" className={getNavLinkActiveClass}>
          My Orders
        </NavLink>
      )}

      <NavLink to="/aboutus" className={getNavLinkActiveClass}>
        About Us!
      </NavLink>
      {admin && (
        <NavLink to="/admin" className={getNavLinkActiveClass}>
          Dashboard
        </NavLink>
      )}

      {user.email && (
        <Button className="btn btn-default text-primary ps-3 fw-bolder h2">
          Hi, {user.displayName}
        </Button>
      )}
      {user.email ? (
        <Link to="/" className={getNavLinkActiveClass}>
          <Button onClick={handleLogOut} btnClass="btn-danger">
            Logout
          </Button>
        </Link>
      ) : (
        <NavLink to="/login" className={getNavLinkActiveClass}>
          Login
        </NavLink>
      )}
    </Nav>
  );
};

export default Navitem;
