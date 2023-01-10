import React from "react";
import "./stat.css";
function Stat() {
  return (
    <div className="stat">
      <div id="stat1">
        <div id="statgroup1">
          <div className="groupcard">
          <div className="groupcard-head">50K<span className="spangreen">+</span></div>
            <div className="groupcard-body">Mobile Downloads</div>
          </div>
          <div className="groupcard">
          <div className="groupcard-head">80K<span className="spangreen">+</span></div>
            <div className="groupcard-body">Happy Learners</div>
          </div>
        </div>
        <div id="statgroup2">
          <div className="groupcard">
            <div className="groupcard-head">53K<span className="spangreen">+</span></div>
            <div className="groupcard-body">Sessions per month</div>
          </div>
          <div className="groupcard">
          <div className="groupcard-head">200<span className="spangreen">+</span></div>
            <div className="groupcard-body">Speakers around the globe</div>
          </div>
        </div>
      </div>

      <div id="stat2">
        <span>Book a trial</span>
        <div id="stat2-head">Start your English speaking journey today! </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis.</p>
        <div className="booktrail"><button id="bookbutton" type="button">Book a Trail</button> </div>
      </div>
    </div>
  );
}

export default Stat;
