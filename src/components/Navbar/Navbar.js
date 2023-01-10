import React from "react";
import logo from "../images/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          {" "}
          <img className="logo" src={logo} alt=""/>{" "}
        </Link>{" "}
      </div>
      <div className="list">
        <a href="#">Plans and prices</a>
        <a href="#">Teach with Us</a>
        <a href="#">Affiliate Program</a>
        <a href="#">Kids</a>
      </div>
      {!props.success ? (
        <div>
          <Link to="/login">
            <button id="loginbutton" type="button">
              Login{" "}
            </button>{" "}
          </Link>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
