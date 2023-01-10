import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import './home.css';
import { useNavigate } from "react-router-dom";
function Home(props) {
  let history = useNavigate();
  const clickHandler = ()=>{
    localStorage.clear();
    history("/");
  }
  return (
    <div id="home">
        <Navbar success={props.success}/>
        <span id="home-msg"> Logged in Successfully! :)</span>
        <button id="loginbutton" type="button" onClick={clickHandler}>
        {" "}Click here to clear LocalStorage and go to Default Page{" "}
              </button>
    </div>
  )
}

export default Home