import React from "react";
import "./work.css";
import img from "../images/workcard-t2.png";

function Work() {
  return (
    <div className="work">
      <div>
        <h3>How it works ?</h3>
      </div>
      <div id="workcards">
        <div className="workcard">
          <div className="workcard-t1">
            <span>1. Create Account</span>
            <p>
              {" "}
              Create your account using phone number or email and take a free
              trial at ₹1.
            </p>
          </div>
          <div className="workcard-t1">
            <span>3. Select time slot</span>
            <p>
              Subscribe & select any time slot between 10 AM to 12 midnight.
            </p>
          </div>
        </div>
        <div className="workcard">
          <img src={img} alt="" className="workcard-t2" />
        </div>
        <div className="workcard">
          <div className="workcard-t1">
            <span>2. Subscribe</span>
            <p>
              Choose your preferred duration and select subscription package for
              your sessions.
            </p>
          </div>
          <div className="workcard-t1">
            <span>4. You are done</span>
            <p>
              That’s it! Start practicing and reach your learning goal in
              speaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
