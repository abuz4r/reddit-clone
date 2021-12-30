import React from "react";
import "./Subreddit.css";

export default function subreddit(props) {
  const { updateSubReditt } = props;
  const subreddits = [
    "funny",
    "AskReddit",
    "gaming",
    "aww",
    "Music",
    "pics",
    "science",
    "worldnews",
    "announcements",
  ];
  return (
    <div className="subreddit-section">
      <div className="subreddit-contents">
        <span>subreddits</span>
        <ul>
          {subreddits.map((subreddit, index) => (
            <li key={index}>
              <button onClick={() => updateSubReditt(subreddit)}>r/{subreddit}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
