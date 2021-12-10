import React from "react";
import "./Subreddit.css";

export default function subreddit() {
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
          {subreddits.map((subreddit) => (
            <li>
              <a href="#">r/{subreddit}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
