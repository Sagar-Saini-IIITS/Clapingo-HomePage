import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="lefthero">
        <h1>
          Hone your english speaking skills over <span>one-on-one</span> video
          call
        </h1>
        <p>
          Practice english conversation with excellent communuicators across the
          country and speak like a PRO 😎.
        </p>
        <div className="herobuttons">
          <div className="booktrail">
            <button id="bookbutton" type="button">
              Book a Trail
            </button>{" "}
          </div>
          <div id="downloadbutton">
            <button type="button">Download our App</button>
          </div>
        </div>
      </div>
      <div className="righthero">
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
