import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ token, setToken }) => {
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <>
      <nav>
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/routines">
          Routines
        </Link>
        {!token ? null : (
          <Link className="navlink" to="/my_routines">
            My Routines
          </Link>
        )}
        <Link className="navlink" to="/activities">
          Activities
        </Link>
        {!token ? (
          <Link className="navlink" to="/login">
            Sign Up/Sign In
          </Link>
        ) : (
          <Link className="navlink" to={"/login"} onClickCapture={logout}>
            Logout
          </Link>
        )}
      </nav>
    </>
  );
};

export default NavBar;
