import React, { useEffect } from "react";
import Article from "./Article.jsx";
import "./Post.css";

export default function Post(props) {
  const { fetchSubReditt, subRedditOption, subReddits, errorMessage, isFetching } = props;

  useEffect(() => {
    fetchSubReditt(subRedditOption);
  }, [subRedditOption]);

  return (
    <div className="container">
      {isFetching && <div className="loader"></div>}
      {errorMessage === ''
        ? subReddits.map((article, index) => (
            <Article key={index} article={article.data} />
          ))
        : <div className="error">{errorMessage}</div>}
    </div>
  );
}
