import React from "react";
import Form from "../Form/Form.js";
import Navbar from "../Navbar/Navbar.js";
import Home from "../Home/Home.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {

  let history = useNavigate();
  
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("username")) &&
      JSON.parse(localStorage.getItem("password"))
    ) {
      history("/home");
    }
  }, );

  return (
    <div>
      {JSON.parse(localStorage.getItem("username")) &&
      JSON.parse(localStorage.getItem("password")) ? (
        <Home />
      ) : (
        <>
          <Navbar success={props.success} />
          <Form />{" "}
        </>
      )}
    </div>
  );
}

export default Login;
