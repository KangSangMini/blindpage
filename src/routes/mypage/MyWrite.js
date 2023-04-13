import React from "react";
import styled from "styled-components";
import logos from "../../assets/images/logos.png";
import myWriteList from "../../assets/data/myWriteList";

export default function MyWrite() {
  return (
    <StyledMyWrite>
      <div className="myWrite">
        <div className="myWrite-header">
          <h1>내가 작성한 글</h1>
        </div>
        <div className="myWrite-body">
          <ul>
            {myWriteList.map((article) => {
              return (
                <a href="/">
                  <li className="myWrite-body-article">
                    <p className="myWrite-body-article-tit">{article.title}</p>
                    <p className="myWrite-body-article-cate">{`회원님이 '${article.cate}'에 게시물을 등록했습니다.`}</p>
                    <p className="myWrite-body-article-date">{article.date}</p>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledMyWrite>
  );
}

const StyledMyWrite = styled.section`
  .myWrite {
    &-header {
      width: 100%;
      font-size: 1.8rem;
      font-weight: 900;
      padding: 20px;
      border-bottom: 1px solid #dfe1e4;
    }
    &-body {
      &-article {
        position: relative;
        padding: 20px 20px 20px 56px;
        border-bottom: 1px solid #eee;
        &::before {
          position: absolute;
          top: 20px;
          left: 20px;
          content: "";
          display: block;
          width: 24px;
          height: 24px;
          background: url(${logos}) no-repeat -384px -384px / 600px 900px;
        }
        &-tit {
          font-size: 1.4rem;
          font-weight: 900;
        }
        &-cate {
          font-size: 1.2rem;
          margin-top: 10px;
          color: #94969b;
        }
        &-date {
          font-size: 1.2rem;
          margin-top: 8px;
          color: #94969b;
        }
      }
    }
  }
  @media screen and (min-width: 1100px) {
    width: 100%;
    .myWrite {
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 20px;
      &-header {
        margin-top: 12px;
        padding: 20px 0 20px;
        border-width: 2px;
        font-size: 2.2rem;
      }
      &-body {
        &-article {
          position: relative;
          &-tit {
            font-size: 1.6rem;
            font-weight: 900;
          }
          &-cate {
            font-size: 1.4rem;
          }
          &-date {
            position: absolute;
            right: 20px;
            bottom: 20px;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`;
