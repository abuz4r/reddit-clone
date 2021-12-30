import React from "react";
import "./Nav.css";

export default function nav(props) {
  const { updateSubReditt, subRedditOption } = props;
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={"./reddit-logo.png"} alt="logo" />
        <span className="nav-title">redditclone</span>
      </div>
      <div className="search">
        <span>r/</span>
        <input
          id="search-bar"
          type="text"
          onChange={(e) => updateSubReditt(e.target.value)}
          placeholder={subRedditOption}
        />
      </div>
    </div>
  );
}
