import "./App.css";
import Hero from "./components/Hero/Hero";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Stat from "./components/Stat/Stat";
import Offer from "./components/Offer/Offer";
import Work from "./components/Work/Work";
import Home from "./components/Home/Home.js";
import { useNavigate } from "react-router-dom";

function App() {
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
    <div className="App">
      {JSON.parse(localStorage.getItem("username")) &&
      JSON.parse(localStorage.getItem("password")) ? (
        <Home />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Stat />
          <Offer />
          <Work />
        </>
      )}
    </div>
  );
}

export default App;
