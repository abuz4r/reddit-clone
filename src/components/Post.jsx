import React, { useState, useEffect } from "react";
import Article from "./Article.jsx";
import Nav from "./Nav/Nav.jsx";
import "./Post.css";

export default function Post() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState(["all"]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json")
      .then((res) => {
        if (res.status != 200) {
          console.log("error");
          return;
        }

        res.json().then((data) => {
          if (data != null) {
            setArticles(data.data.children);
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
        <h1 className="error">Error</h1>
      });
  }, [subreddit]);

  return (
    <div className="container">
      <div className="search">
        <span>r/</span>
        <input
          id="search-bar"
          type="text"
          onChange={(e) => setSubreddit(e.target.value)}
          placeholder={subreddit}
        />
      </div>
      {articles != null
        ? articles.map((article, index) => (
            <Article key={index} article={article.data} />
          ))
        : ""}
    </div>
  );
}
