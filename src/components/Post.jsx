import React, { useState, useEffect } from "react";
import Article from "./Article.jsx";
import Nav from "./Nav/Nav.jsx";

export default function Post() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState(["all"]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then((res) => {
      if (res.status != 200) {
        console.log("error");
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);

  return (
    <div className>
      <input
        id="search-bar"
        type="text"
        placeholder="search"
      />
      <button>submit</button>
      {articles != null
        ? articles.map((article, index) => (
            <Article key={index} article={article.data} />
          ))
        : ""}
    </div>
  );
}
