import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeIsLogin } from "../redux/slice/loginSlice";

import logos from "../assets/images/logos.png";

export default function Header() {
  const dispatch = useDispatch();
  const checkLogin = useSelector((store) => {
    return store.loginState.isLogin;
  });

  const [myPageClicked, setMyPageClicked] = useState(false);
  const handleMyPage = () => {
    setMyPageClicked(!myPageClicked);
  };

  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <div className="header">
        <h1 className="header-logo">
          <div>
            <Link to="/">blind</Link>
            <em className="topic">TOPIC</em>
          </div>
        </h1>
        <div className="header-nav">
          <nav className="header-nav-menu">
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="https://www.teamblind.com/kr/company">기업 리뷰</Link>
              </li>
              <li>
                <Link to="https://www.teamblind.com/kr/topics/%EC%B1%84%EC%9A%A9-%EC%A0%84%EC%B2%B4">
                  채용공고
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-func">
          {pathname === "/search" ? (
            <div className="header-func-search">
              <input type="search" />
              <button type="button">검색</button>
            </div>
          ) : (
            ""
          )}

          <button type="button" className="btn-search">
            검색
          </button>
          <Link to="/write" className="btn-post">
            글쓰기
          </Link>
          {!checkLogin ? (
            <Link to="/login" className="btn-login">
              로그인
            </Link>
          ) : (
            <button type="button" className="btn-signed" onClick={handleMyPage}>
              <span>내 메뉴</span>
              {myPageClicked ? (
                <div className="menuPop">
                  <ul>
                    <li>
                      <Link to="/mypage">마이 페이지</Link>
                    </li>
                    <li>
                      <Link to="/mypage/bookmark">북마크</Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        onClick={() =>
                          dispatch(changeIsLogin({ isLogin: false }))
                        }
                      >
                        로그아웃
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </button>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  font-family: "Roboto", sans-serif;
  color: #222;

  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;

    &-logo {
      height: 61px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #d4d4d4;
      div {
        display: flex;
        align-items: flex-end;
        a {
          display: block;
          width: 72px;
          height: 27px;
          text-indent: -9999px;
          background-image: url(${logos});
          background-position: -6.66px -7.4px;
          background-size: 444px 666px;
          margin-right: 3px;
        }
        em {
          width: 54px;
          display: block;
          height: 18px;
          background-image: url(${logos});
          background-position: -89.6px -22.4px;
          background-size: 480px 720px;
          text-indent: -9999px;
        }
      }
    }

    &-nav {
      padding: 0 20px;
      border-bottom: 1px solid #d4d4d4;
      &-menu {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        font-size: 1.6rem;
        font-weight: 700;
        ul {
          display: flex;
          gap: 20px;
          li:not(:nth-child(1)) {
            font-weight: 400;
          }
        }
      }
    }

    &-func {
      &-search {
        display: none;
      }
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      gap: 8px;
      .btn-search {
        width: 30px;
        height: 30px;
        text-indent: -9999px;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background: url(${logos});
          background-size: 600px 900px;
          background-position: -10px -350px;
        }
      }
      .btn-post {
        display: inline-block;
        width: 60px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 1.4rem;
        font-weight: 700;
        background-color: #da3238;
        color: #fff;
      }
      .btn-login {
        display: inline-block;
        width: 60px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 1.4rem;
        font-weight: 700;
        background-color: #fff;
        border: 1px solid #d4d4d4;
      }
      .btn-signed {
        position: relative;
        width: 30px;
        height: 30px;
        span {
          position: absolute;
          left: -10000px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          text-indent: -9999px;
        }
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          background: url(${logos}) no-repeat -132px -7.5px / 450px 675px;
        }
        .menuPop {
          position: absolute;
          top: 100%;
          right: 0;
          min-width: 111px;
          margin-top: 10px;
          border: 1px solid #d4d4d4;
          background-color: #fff;
          padding: 5px 15px 14px 15px;
          z-index: 9999;
          li {
            font-size: 1.2rem;
            font-weight: 700;
            color: #222;
            text-align: left;
            margin-top: 9px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    height: 80px;
    border-bottom: 1px solid #d4d4d4;

    .header {
      flex-direction: row;
      align-items: center;
      gap: 40px;
      height: 80px;

      &-logo {
        border: none;
        div {
          a {
            width: 94px;
            height: 40px;
            background-size: 600px 900px;
            margin-right: 8px;
          }
          em {
            width: 54px;
            height: 22px;
            background-position: -112px -28px;
            background-size: 600px 900px;
          }
        }
      }

      &-nav {
        border: none;
        &-menu {
          align-items: flex-end;
          height: 40px;
          font-size: 2rem;
        }
      }

      &-func {
        gap: 10px;

        &-search {
          display: block;
          position: relative;
          input {
            width: 260px;
            height: 40px;
            padding: 0 10px 0 41px;
            border: 1px solid #d4d4d4;
            border-radius: 20px;
            font-size: 1.4rem;
          }
          button {
            text-indent: -9999px;
            &::before {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 15px;
              content: "";
              display: inline-block;
              width: 20px;
              height: 20px;
              background: url(${logos}) no-repeat -220px -484px / 600px 900px;
            }
          }
        }
        .btn-search {
          display: none;
        }
        .btn-post {
          width: 82px;
          height: 40px;
          line-height: 40px;
        }
        .btn-login {
          width: 82px;
          height: 40px;
          line-height: 40px;
        }
        .btn-signed {
          width: 40px;
          height: 40px;
          &::before {
            background: url(${logos}) no-repeat -176px -10px / 600px 900px;
          }
        }
      }
    }
  }
`;
