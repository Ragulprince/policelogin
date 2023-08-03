import React from "react";
import "./style.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="div" />
          <h1 className="text-wrapper">Get Started</h1>
          <div className="text-wrapper">Get Started</div>
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="text-wrapper-2">Email</div>
          <div className="text-wrapper-3">Password</div>
          <div className="text-wrapper-4">Forgot Password?</div>
          <div className="login-button">
            <div className="overlap-group">
              <div className="LOGIN">Login</div>
            </div>
          </div>
          <img
            className="daco"
            alt="Daco"
            src="https://generation-sessions.s3.amazonaws.com/1529535e23c3043db93cfa62b4fcbd47/img/daco-5185090-1@2x.png"
          />
          <img
            className="blind"
            alt="Blind"
            src="https://generation-sessions.s3.amazonaws.com/1529535e23c3043db93cfa62b4fcbd47/img/blind@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
