import React from "react";
import "./Article.css";

function article(props) {
  return (
    <div className="article">
      <a
        href={"https://www.reddit.com/u/" + props.article.author}
        target="_blank"
      >
        <div className="userName">{"by u/" + props.article.author}</div>
      </a>
      <img src={props.article.url_overridden_by_dest} alt="" />
      <div className="footer">
        <div className="left">
          <div className="votes">{props.article.ups} upvotes</div>
          <a
            href={"https://reddit.com" + props.article.permalink}
            target="_blank"
          >
            <div className="title">{props.article.title}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default article;
