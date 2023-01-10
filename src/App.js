import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar.js'
import Stat from './components/Stat/Stat';
import Offer from './components/Offer/Offer';
import Work from './components/Work/Work';
import Home from './components/Home/Home.js'

function App() {
 
  return (
    <div className="App">
      {(JSON.parse(localStorage.getItem("username")) && JSON.parse(localStorage.getItem("password"))) ? <Home success={true}/> : <>
      <Navbar/>
      <Hero/>
      <Stat/>
      <Offer/>
      <Work/>
      </> }
    </div>
  );
}

export default App;
