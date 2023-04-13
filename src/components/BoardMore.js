import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import timeForToday from "../utils/timeForToday";

export default function BoardMore({ data }) {
  const [bmOn, setBmOn] = useState(false);
  const handleBookmark = () => {
    setBmOn(!bmOn);
  };

  return (
    <StyledBoardMore>
      {data.map((article) => {
        return (
          <Link to={`/post/${article.bid}`} className="boardMore-article">
            <span className="boardMore-article-cate">{article.category}</span>
            <h3 className="boardMore-article-tit">{article.title}</h3>
            <p className="boardMore-article-content">{article.content}</p>
            <p className="boardMore-article-user">
              <span>{article.company}</span>
              {" · "}
              <span>{article.nick}</span>
            </p>
            <div className="boardMore-article-sub">
              <div className="boardMore-article-sub-left">
                {/* <Link to="/" className="view">
                  {article.sub.view}
                </Link> */}
                <Link to="/" className="like">
                  {article.thumb}
                </Link>
                <Link to="/" className="comment">
                  {article.comment}
                </Link>
              </div>
              <div className="boardMore-article-sub-right">
                <span className="boardMore-article-sub-time">
                  {timeForToday(article.date)}
                </span>
                <a
                  href="/"
                  className={`bookmark ${bmOn ? "on" : ""}`}
                  onClick={handleBookmark}
                >
                  <i className="blind">북마크</i>
                </a>
              </div>
            </div>
          </Link>
        );
      })}
    </StyledBoardMore>
  );
}

const StyledBoardMore = styled.section`
  width: 100%;
  .boardMore-article {
    display: block;
    padding: 24px 20px;
    border-bottom: 1px solid #eee;
    &-cate {
      font-size: 1.2rem;
    }
    &-tit {
      font-size: 1.4rem;
      font-weight: 700;
      margin-top: 2px;
    }
    &-content {
      font-size: 1.4rem;
      margin-top: 8px;
    }
    &-user {
      font-size: 1.2rem;
      margin-top: 16px;
    }
    &-sub {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      color: #94969b;
      margin-top: 8px;
      &-left {
        a {
          margin-right: 14px;
        }
      }
      &-right {
        a {
          margin-left: 8px;
          text-indent: -9999px;
        }
      }
    }
  }
  @media screen and (min-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
    .boardMore-article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 219px;
      border-bottom: 1px solid #eee;
      padding: 0;
      &:nth-child(odd) {
        padding-right: 20px;
        border-right: 1px solid #eee;
      }
      &:nth-child(even) {
        padding-left: 20px;
      }
      &-cate {
        font-size: 1.2rem;
      }

      &-tit {
        font-size: 1.8rem;
        font-weight: 700;
        height: 52px;
        margin-top: 5px;
      }

      &-content {
        font-size: 1.4rem;
        height: 43px;
      }

      &-user {
        font-size: 1.2rem;
        margin-top: 16px;
      }

      &-sub {
        font-size: 1.2rem;
        color: #94969b;
        margin-top: 8px;
        &-right {
          position: relative;
          .bookmark {
            text-indent: -9999px;
          }
        }
      }
    }
  }
`;

BoardMore.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        bid: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        nick: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        thumb: PropTypes.number.isRequired,
        comment: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    PropTypes.arrayOf(
      PropTypes.shape({
        mid: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        nick: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  ]).isRequired,
};
