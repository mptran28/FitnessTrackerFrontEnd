import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/activities">
          Activities
        </NavLink>
        <NavLink className="navlink" to="/routines">
          Routines
        </NavLink>
        <NavLink className="navlink" to="/register">
          Register
        </NavLink>
        <NavLink className="navlink" to="/login">
          Login
        </NavLink>
        <NavLink className="navlink" to="/my_routines">
          My Routines
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
