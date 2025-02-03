import React, { act, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <input placeholder="Name" type="text" />
          </div>
        )}

        <div className="input">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <input placeholder="Email" type="email" />
        </div>
        <div className="input">
          <FontAwesomeIcon className="icon" icon={faLock} />
          <input placeholder="Password" type="password" />
        </div>
      </div>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-btn">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
