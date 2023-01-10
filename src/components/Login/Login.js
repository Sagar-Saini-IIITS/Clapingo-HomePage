import React from 'react'
import Form from '../Form/Form.js';
import Navbar from '../Navbar/Navbar.js'
import Home from '../Home/Home.js'
function Login(props) {
  return (
    <div>
    {(JSON.parse(localStorage.getItem("username")) && JSON.parse(localStorage.getItem("password"))) ? <Home success={props.success}/> : <>
    <Navbar success={props.success}/>
    <Form/> </>  }
    </div>
  )
}

export default Login;