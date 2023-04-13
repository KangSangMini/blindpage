/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import logos from "../../assets/images/logos.png";

export default function Edit() {
  const navigate = useNavigate();

  const userId = useSelector((store) => {
    return store.loginState.userId;
  });

  const [dropdown, setDropDown] = useState(false);
  const [cate, setCate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };
  const changeCate = (e) => {
    setCate(e.target.innerText);
    setDropDown(!dropdown);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };

  const { bid } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/board/${bid}`,
        });
        setCate(res.data.info.rows[0].category);
        setTitle(res.data.info.rows[0].title);
        setContent(res.data.info.rows[0].content);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const submitWrite = () => {
    const postData = async () => {
      try {
        const res = await axios({
          method: "put",
          url: "http://43.200.254.222:3000/board/correction",
          data: {
            bid,
            buid: userId,
            category: cate,
            title,
            content,
          },
        });
        navigate(`/post/${res.data.info.bid}`);
        console.log(res);
        // navigate("/post", { state: { bid: 1 } });
      } catch (err) {
        console.log(err);
      }
    };
    postData();
  };
  return (
    <StyledWrite>
      <div className="edit">
        <div className="edit-form">
          <StyledTopBar>
            <div className="topbar">
              <Link to="/" className="close">
                <i className="blind">Close</i>
              </Link>
              <div className="topbar-title">
                <span>글쓰기</span>
              </div>
              <div className="topbar-apply">
                <button type="button" onClick={submitWrite}>
                  수정
                </button>
              </div>
            </div>
          </StyledTopBar>
          <div className="edit-form-topic" onClick={handleDropDown}>
            <input
              type="search"
              placeholder="토픽을 선택해주세요."
              value={cate}
              onClick={handleDropDown}
            />
            <button
              type="button"
              onClick={handleDropDown}
              className="edit-form-topic-dropdown"
            >
              <i />
            </button>
            {dropdown && (
              <div className="edit-form-topic-menu">
                <ul>
                  <li onClick={changeCate}>accounting</li>
                  <li onClick={changeCate}>animal</li>
                  <li onClick={changeCate}>car</li>
                  <li onClick={changeCate}>company</li>
                  <li onClick={changeCate}>employment</li>
                  <li onClick={changeCate}>entertainments</li>
                  <li onClick={changeCate}>game</li>
                  <li onClick={changeCate}>health</li>
                  <li onClick={changeCate}>hobby</li>
                  <li onClick={changeCate}>humor</li>
                </ul>
              </div>
            )}
          </div>
          <div className="edit-form-body">
            <div className="edit-form-body-title">
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={handleSetTitle}
              />
            </div>
            <div className="edit-form-body-content">
              <textarea
                name="content"
                id=""
                rows="10"
                placeholder="토픽에 맞지 않는 글로 판단되어 다른 유저로부터 일정 수 이상의 신고를 받는 경우 글이 자동으로 숨김처리 될 수 있습니다."
                value={content}
                onChange={handleContent}
              />
            </div>
          </div>
          <div className="edit-form-footer">
            <Link to="/" className="edit-form-footer-img">
              <span />
            </Link>
          </div>
        </div>
      </div>
    </StyledWrite>
  );
}

const StyledTopBar = styled.div`
  height: 54px;
  border-bottom: 1px solid #d4d4d4;
  .topbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    padding: 0 20px;
    font-size: 1.8rem;
    font-weight: 700;

    .close {
    }
    &-title {
    }
    &-apply {
      button {
        font-size: 1.8rem;
        font-weight: 700;
        color: #94969b;
      }
    }
  }
`;

const StyledWrite = styled.section`
  width: calc(100vw - 16px);
  height: 100vh;

  .edit {
    &-form {
      color: #222;

      &-tit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 54px;
        padding: 0 20px;
        font-size: 1.6rem;
        font-weight: 700;
        &-close {
          padding-left: 20px;
          background: url(${logos}) no-repeat -294px -294px / 504px 756px;
        }
        &-edit {
        }
        &-apply {
          button {
            font-size: 1.6rem;
            font-weight: 700;
            color: #94969b;
          }
        }
      }

      &-topic {
        position: relative;
        display: flex;
        padding: 20px;
        font-size: 1.5rem;
        min-height: 48px;
        border-bottom: 1px solid #d4d4d4;
        &::before {
          display: inline-block;
          content: "";
          width: 20px;
          height: 20px;
          background: url(${logos}) no-repeat -280px -484px / 600px 900px;
        }
        input {
          margin-left: 6px;
          font-size: 1.5rem;
          color: #222;
          &::placeholder {
            font-size: 1.5rem;
            color: #222;
          }
        }
        &-dropdown {
          position: absolute;
          right: 20px;
          width: 16px;
          height: 16px;
          background: url(${logos}) no-repeat -114px -626px / 600px 900px;
        }
        &-menu {
          position: absolute;
          top: 100%;
          left: 0;
          display: block;
          width: 100%;
          max-height: 215px;
          overflow-y: auto;
          background-color: #fff;
          border-top: 1px solid #d4d4d4;
          border-bottom: 1px solid #d4d4d4;
          li {
            padding: 12px 20px;
            font-size: 1.2rem;
            &:hover {
              color: #fff;
              background-color: #da3238;
            }
          }
        }
      }

      &-body {
        padding: 14px 20px;
        &-title {
          min-height: 76px;
          input {
            width: 100%;
            padding: 15px 0px;
            font-size: 1.6rem;
            &::placeholder {
              color: #94969b;
            }
          }
        }
        &-content {
          textarea {
            width: 100%;
            font-size: 1.5rem;
            min-height: 63px;
            resize: none;
            &::placeholder {
              color: #94969b;
            }
          }
        }
      }

      &-footer {
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 54px;
        padding: 0 20px;
        border: 1px solid #dfe1e4;
        &-img {
          display: inline-block;
          width: 24px;
          height: 24px;
          background: url(${logos}) no-repeat -10px -384px / 600px 900px;
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    .edit {
      max-width: 1140px;
      margin: 0 auto;
    }
  }
`;
