import React from "react";
import "./Article.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function article(props) {
  const up = <FontAwesomeIcon icon={faArrowUp} />;
  const down = <FontAwesomeIcon icon={faArrowDown} />;
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
          <div className="interact-section">
            <btn className="comments">view comments</btn>
          </div>
        </div>
        <div className="right">
          <div className="arrows">
            <div className="up">{up}</div>
            <div className="down">{down}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default article;
