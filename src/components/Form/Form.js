import { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = () => {
    if (userName.length > 0 && password.length > 0) {
      localStorage.setItem("username", JSON.stringify(userName));
      localStorage.setItem("password", JSON.stringify(password));
    }
  };
  
  return (
    <div id="form">
      <div id="login-form">
        <div className="form-field">
          <label> Username </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Username of len > 0"
          />
        </div>
        <div className="form-field">
          <label> Password </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password of len > 0"
          />
        </div>
        <div>
          <Link to="/home">
            {userName.length > 0 && password.length > 0 ? (
              <button id="loginbutton" type="button" onClick={clickHandler}>
                Login{" "}
              </button>
            ) : (
              <button id="loginbutton" type="button" disabled="true">
                Login{" "}
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
