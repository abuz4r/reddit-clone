import React from "react";
import "./Nav.css";

export default function nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={"./reddit-logo.png"} alt="logo" />
        <span className="nav-title">redditclone</span>
      </div>
    </div>
  );
}
