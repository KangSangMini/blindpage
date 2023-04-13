/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import CmtPage from "./CmtPage";
import timeForToday from "../../utils/timeForToday";
import Delete from "../../components/Delete";

const Wrap = styled.div`
  .blind {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    font-size: 0.1rem;
    line-height: 100px;
    white-space: nowrap;
  }
  i {
    font-style: italic;
  }
  div {
    display: block;
  }
  span {
    color: #222;
    font-size: 2rem;
    @media screen and (max-width: 1100px) {
      font-size: 1.2rem;
    }
  }
  a {
    text-decoration: none;
    color: #222;
    cursor: pointer;
  }
  .main {
    @media screen and (max-width: 1100px) {
      /* width: 736px; */
      width: 100%;
      max-height: 800px;
      padding-top: 20px;
      font-size: 1.2rem;
    }
    width: 100%;

    &-head {
      position: relative;
      z-index: 105;
      padding: 25px 20px 19px;
      @media screen and (max-width: 1100px) {
        z-index: 10;
        padding: 0 0 29px;
      }
      h1 {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 16px;
        @media screen and (max-width: 1100px) {
          font-size: 1.2rem;
        }
        a:first-of-type {
          text-decoration: none;
        }
        .h1-second-a {
          &::before {
            background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
              no-repeat;
            background-size: 600px 900px;
            background-position: -10px -626px;
            display: inline-block;
            width: 16px;
            height: 16px;
            margin: -2px 4px 0;
            vertical-align: middle;
            content: "";
            @media screen and (max-width: 1100px) {
              margin: -4px 4px 0;
            }
          }
        }
      }
      h2 {
        margin-top: 15px;
        font-size: 2rem;
        font-weight: bold;
        line-height: 28px;
        @media screen and (max-width: 1100px) {
          font-size: 1.6rem;
          line-height: 32px;
        }
      }
    }
    &-content {
      padding: 0 20px;
      border-top: 1px solid #eee;
      word-wrap: break-word;
      word-break: break-word;
      @media screen and (max-width: 1100px) {
        padding: 0;
      }
    }

    .name {
      display: flex;
      align-items: center;
      margin-top: 16px;
      font-size: 1.4rem;
      line-height: 16px;
      @media screen and (max-width: 1100px) {
        font-size: 1.2rem;
      }
      a.point {
        color: #37acc9;
      }
      a {
        margin-right: 4px;
        color: #37acc9;
      }
    }
    .wrap-info {
      position: relative;
      margin-top: 8px;
      font-size: 1.4rem;
      @media screen and (max-width: 1100px) {
        width: 100%;
        font-size: 1.2rem;
        margin-top: 15px;
      }
      span {
        margin-right: 14px;
        color: #94969b;
        vertical-align: top;
        &::before {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin: -1px 3px 1px 0;
          vertical-align: middle;
          content: "";
        }
      }
      a {
        margin-right: 14px;
        color: #94969b;
        vertical-align: top;
        &::before {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin: -1px 3px 1px 0;
          vertical-align: middle;
          content: "";
        }
      }
      .date {
        &::before {
          background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
            no-repeat;
          background-size: 600px 900px;
          background-position: -88px -600px;
        }
      }
      .pv {
        &::before {
          background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
            no-repeat;
          background-size: 600px 900px;
          background-position: -10px -600px;
        }
      }
      .cmt {
        &::before {
          background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
            no-repeat;
          background-size: 600px 900px;
          background-position: -36px -600px;
        }
      }
      .info-snc {
        position: absolute;
        top: 0;
        right: 0;
        @media screen and (max-width: 1100px) {
          top: 0;
        }
        .mark {
          display: inline-block;
          width: 20px;
          height: 20px;
          padding: 2px;
          box-sizing: border-box;
          &::before {
            background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
              no-repeat;
            background-size: 600px 900px;
            background-position: -114px -652px;
            vertical-align: top;
            cursor: pointer;
          }
        }
        .mark.on {
          display: inline-block;
          width: 20px;
          height: 20px;
          padding: 2px;
          box-sizing: border-box;
          &::before {
            background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
              no-repeat;
            background-size: 600px 900px;
            background-position: -140px -652px;
            vertical-align: top;
            cursor: pointer;
          }
        }
        .moreBtn {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 0;
          padding: 2px;
          box-sizing: border-box;
          &::before {
            display: inline-block;
            content: "";
            width: 20px;
            height: 20px;
            background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
              no-repeat;
            background-size: 600px 900px;
            background-position: -192px -652px;
            vertical-align: top;
          }
        }
      }
    }

    .info {
      a::before {
        @media screen and (max-width: 1100px) {
          width: 19px;
          height: 20px;
          margin-top: -11px;
          content: "";
        }
      }
      span::before {
        @media screen and (max-width: 1100px) {
          width: 19px;
          height: 20px;
          margin-top: -11px;
          content: "";
        }
      }
      .like {
        cursor: pointer;
        &::before {
          background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
            no-repeat;
          background-size: 600px 900px;
          background-position: -130px -484px;
          display: inline-block;
          content: "";
          width: 21px;
          height: 22px;
          vertical-align: middle;
          margin-right: 3px;
          cursor: pointer;
          @media screen and (max-width: 1100px) {
            background-size: 600px 903px;
          }
        }
      }
      .cmt {
        padding-left: 10px;
        &::before {
          background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
            no-repeat;
          background-size: 504px 756px;
          background-position: -58.8px -406.56px;
          display: inline-block;
          content: "";
          width: 21px;
          height: 18px;
          vertical-align: middle;
          margin-right: 3px;
          @media screen and (max-width: 1100px) {
            background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
              no-repeat;
            background-size: 600px 903px;
            background-position: -70px -484px;
          }
        }
      }
    }
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
    padding: 20px;
    .category {
      padding-top: 39px;
      span {
        font-size: 1.4rem;
      }
    }
    .title {
      padding-top: 15px;
      span {
        font-size: 2.4rem;
      }
    }
    .content {
      padding: 30px 20px;
      border-top: 1px solid #eee;
      word-wrap: break-word;
      word-break: break-word;
    }

    .share {
      position: absolute;
      bottom: -2px;
      right: 0;
      height: 32px;
      text-align: right;
      [class^="btn-"] {
        display: inline-block;
        width: 32px;
        height: 32px;
        margin-left: 4px;
        text-indent: -9999px;
      }
      .btn-share {
        background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
          no-repeat;
        background-size: 600px 900px;
        background-position: -178px -80px;
        padding: 20px;
        @media screen and (min-width: 1100px) {
          display: none;
        }
      }
      .btn-kakao {
        background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
          no-repeat;
        background-size: 600px 900px;
        background-position: -10px -80px;
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
      .btn-facebook {
        display: inline-block;
        background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
          no-repeat;
        background-size: 600px 900px;
        background-position: -52px -80px;
        display: none;
        @media screen and (min-width: 1100px) {
          display: inline-block;
        }
      }
      .btn-twitter {
        background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
          no-repeat;
        background-size: 600px 900px;
        background-position: -94px -80px;
        display: none;
        @media screen and (min-width: 1100px) {
          display: inline-block;
        }
      }
      .btn-url {
        background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
          no-repeat;
        background-size: 600px 900px;
        background-position: -136px -80px;
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
    }
  }
`;

const StyledMoreBtn = styled.div`
  display: none;
  position: absolute;
  right: 0;
  width: 118px;
  min-width: 62px;
  padding: 5px 15px 14px;
  background-color: #fff;
  border: 1px solid #d4d4d4;
  z-index: 9999;
  li {
    width: 100%;
    margin-top: 9px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #222;
    cursor: pointer;
  }
  /* &.active {
    display: block;
  } */
`;

function Post() {
  const navigate = useNavigate();

  const uid = useSelector((store) => {
    return store.loginState.userId;
  });
  const { bid } = useParams();
  const [data, changeData] = useState([]);
  const [cmtNum, setCmtNum] = useState(0);
  const [postMenu, setPostMenu] = useState(false);
  const [isDelPop, setIsDelPop] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isBookMark, setIsBookMark] = useState(false);

  const handlePostMenu = () => {
    setPostMenu(!postMenu);
  };
  const handleDelPop = () => {
    setIsDelPop(!isDelPop);
  };
  const handleEdit = () => {
    navigate(`/post/${bid}/edit`);
  };
  const userId = useSelector((store) => {
    return store.loginState.userId;
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/board/${bid}`,
        });
        console.log(res);
        changeData(res.data.info.rows[0]);
        setLikeNum(res.data.info.rows[0].thumb);
      } catch (err) {
        console.log(err);
      }
    };
    const getCmtNum = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/comment/count/${bid}`,
        });
        setCmtNum(res.data.info.count[0].count);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    getCmtNum();
    return () => {};
  }, []);

  const addLike = () => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/thumb/check/${userId}/${bid}`,
        });
        if (res.data.message === "thumb") {
          setLikeNum(likeNum + 1);
          setIsLike(true);
        } else {
          setLikeNum(likeNum - 1);
          setIsLike(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };

  const handleDelete = () => {
    const deleteData = async () => {
      try {
        const res = await axios({
          method: "delete",
          url: `http://43.200.254.222:3000/board/delete/${userId}/${bid}`,
          data: {
            buid: userId,
            bid,
          },
        });
        if (res.data.status === "success") {
          navigate("/");
        } else {
          alert("삭제 실패");
        }
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
  };

  const addBookMark = () => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/board/check/${uid}/${bid}`,
        });
        console.log(res.data);
        if (res.data.message === "mark") {
          setIsBookMark(true);
        } else {
          setIsBookMark(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    console.log(isBookMark);
  };

  return (
    <>
      <Wrap>
        <div className="main">
          <div className="main-head">
            <h1>
              <a href="/">토픽</a>
              <a href="/" className="h1-second-a">
                {data.category}
              </a>
            </h1>

            <h2>{data.title}</h2>

            <div className="name">
              <a href="/">{data.company} ·</a>
              <span>{data.nick}</span>
            </div>
            <div className="wrap-info">
              <span className="date">
                {timeForToday(data.date)}
                <i className="blind">작성일</i>
              </span>
              <span className="cmt">
                <i className="blind">댓글</i>
                {cmtNum}
              </span>

              <div className="info-snc">
                <span
                  href="/"
                  className={`mark ${isBookMark ? "on" : ""}`}
                  onClick={addBookMark}
                >
                  <i className="blind">북마크</i>
                </span>
                <button
                  type="button"
                  href="/"
                  className="moreBtn"
                  onClick={handlePostMenu}
                >
                  <i className="blind">메뉴 더보기</i>
                </button>
                {postMenu ? (
                  <StyledMoreBtn>
                    <ul>
                      <li onClick={handleEdit}>수정</li>
                      <li onClick={handleDelPop}>삭제</li>
                      {isDelPop ? (
                        <Delete
                          handleDelPop={handleDelPop}
                          handleDelete={handleDelete}
                        />
                      ) : (
                        ""
                      )}
                    </ul>
                  </StyledMoreBtn>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="content">
              <p>{data.content}</p>
            </div>

            <div>
              <div className="info">
                <span
                  type="button"
                  className={`like ${isLike ? "on" : ""}`}
                  onClick={addLike}
                >
                  {likeNum}
                </span>
                <span className="cmt">{cmtNum}</span>
              </div>
              <div className="share">
                <div>
                  <a href="/" className="btn-share">
                    <i className="blind">공유하기</i>
                  </a>
                  <a href="/" className="btn-kakao">
                    <i className="blind">카카오톡</i>
                  </a>
                  <span>
                    <span data-link="#share-facebook">
                      <a href="/" className="btn-facebook">
                        <i className="blind">페이스북</i>
                      </a>
                    </span>
                    <span data-link="#share-twitter">
                      <a href="/" className="btn-twitter">
                        <i className="blind">트위터</i>
                      </a>
                    </span>
                  </span>
                  <a href="/" className="btn-url">
                    <i className="blind">링크복사</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
      <CmtPage />
    </>
  );
}

export default Post;
