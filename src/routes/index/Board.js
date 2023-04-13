import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logos from "../../assets/images/logos.png";
import MoreButton from "../../components/MoreButton";

export default function Board() {
  const [data, changeData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://43.200.254.222:3000/category/topic",
        });
        changeData(res.data.info);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };
    getData();
    return () => {};
  }, []);
  // await axios({
  //   method: "get",
  //   url: "http://43.200.254.222:3000/category/topic",
  //   // responseType: "JSON",
  // })
  //   .then((res) => {
  //     console.log(res);
  //     changeData(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <StyledBoard>
      <div className="board">
        <h2 className="board-title">
          <i className="board-title-ico">
            <img
              src={`${process.env.PUBLIC_URL}/images/ico-best.png`}
              alt="왕관"
            />
          </i>
          토픽 베스트
        </h2>
        {data.map((article) => {
          return (
            <div className="board-article" key={article.bid}>
              <span className="board-article-cate">{article.category}</span>
              <Link to={`/post/${article.bid}`} className="board-article-tit">
                {article.title}
              </Link>
              <div className="board-article-info">
                <Link to={`/post/${article.bid}`} className="like">
                  {article.thumb}
                </Link>
                {/* <a href={`/post/${article.num}`} className="comment">
                  {article.cmt}
                </a> */}
              </div>
            </div>
          );
        })}
        <MoreButton url="topics" />
      </div>
    </StyledBoard>
  );
}

const StyledBoard = styled.section`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  color: #222;

  .board {
    padding: 0 20px;
    border-top: 8px solid #f2f2f3;

    &-title {
      position: relative;
      height: 54px;
      line-height: 54px;
      font-weight: 700;
      border-bottom: 1px solid #eee;
      &-ico {
        display: inline-block;
        width: 32px;
        height: 32px;
        position: relative;
        top: 50%;
        transform: translateY(-55%);
        margin-right: 2px;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
    }

    &-article {
      display: flex;
      flex-direction: column;
      padding: 11px 0;
      border-bottom: 1px solid #f5f5f5;

      &-cate {
        font-size: 1.2rem;
        color: #94969b;
      }

      &-tit {
        display: block;
        max-width: 100%;
        margin-top: 2px;
        line-height: 20px;
        font-size: 1.4rem;
        &::before {
          display: inline-block;
          content: "";
          width: 16px;
          height: 16px;
          margin: 3px 3px 0 0;
          background: url(${logos}) no-repeat -166px -600px / 600px 900px;
          vertical-align: top;
        }
      }

      &-info {
        display: flex;
        margin-top: 8px;
        a {
          width: 48px;
          margin-right: 14px;
          white-space: nowrap;
          font-size: 1.2rem;
          color: #94969b;
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    .board {
      position: relative;
      padding: 0;
      border-top: none;
      &-title {
        height: 45px;
        font-size: 1.8rem;
        border-bottom-width: 2px;
        margin-bottom: 11px;
        &-ico {
          transform: translateY(-43%);
          margin-right: 4px;
        }
      }

      &-article {
        position: relative;
        flex-direction: row;
        align-items: center;
        border: none;
        padding: 0;
        margin-top: 2px;
        &-cate {
          display: block;
          height: 20px;
          padding: 0 7px;
          border: 1px solid #eee;
        }
        &-tit {
          margin-top: 0;
          line-height: 30px;
          &::before {
            margin: 0 4px;
            vertical-align: middle;
          }
        }
        &-info {
          position: absolute;
          right: 0;
          margin: 0;
          a {
            width: 48px;
            margin-left: 14px;
            font-size: 1.2rem;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;
