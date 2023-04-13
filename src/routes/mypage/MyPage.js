/* eslint-disable prefer-const */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { changeIsLogin, login } from "../../redux/slice/loginSlice";

export default function MyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redux
  const userId = useSelector((store) => {
    return store.loginState.userId;
  });
  const nowNick = useSelector((store) => {
    return store.loginState.nick;
  });

  // state
  const [writeNum, setWriteNum] = useState(0);
  const [cmtNum, setCmtNum] = useState(0);
  const [likeNum, setLikeNum] = useState(0);
  const [withDrawPop, SetWithDrawPop] = useState(false);

  // setter
  const handleWriteNum = (res) => {
    setWriteNum(res);
  };
  const handleCmtNum = (res) => {
    setCmtNum(res);
  };
  const handleLikeNum = (res) => {
    setLikeNum(res);
  };

  const handleWithDrawPop = () => {
    SetWithDrawPop(!withDrawPop);
  };

  const handleWithDraw = () => {
    const deleteData = async () => {
      try {
        await axios({
          method: "delete",
          url: "http://43.200.254.222:3000/users/delete",
          data: {
            uid: userId,
          },
        });
        dispatch(
          login({
            userId: "",
            email: "",
            nick: "",
            company: "",
          })
        );
        dispatch(changeIsLogin({ isLogin: false }));
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
    navigate("/");
  };

  // useEffect
  useEffect(() => {
    const getWriteNum = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/users/board/${userId}`,
        });
        handleWriteNum(res.data.info[0].board_count);
        console.log(res.data.info[0].board_count);
      } catch (err) {
        console.log(err);
      }
    };
    const getCmtNum = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/users/comment/${userId}`,
        });
        handleCmtNum(res.data.info[0].comment_count);
        console.log(res.data.info[0].comment_count);
      } catch (err) {
        console.log(err);
      }
    };
    const getLikeNum = async () => {
      // 좋아요 -> 에러
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/users/thumb/${userId}`,
        });
        handleLikeNum(res.data.info[0].thumb_count);
        console.log(res.data.info[0].thumb_count);
      } catch (err) {
        console.log(err);
      }
    };
    getWriteNum();
    getCmtNum();
    getLikeNum();
    return () => {};
  }, []);

  return (
    <StyledMyPage>
      <div className="myPage">
        <div className="myPage-info">
          <div className="myPage-info-header">
            <span>{nowNick}</span>
            <Link to="/mypage/profile" type="button">
              <i className="fa-regular fa-user" />
              수정
            </Link>
          </div>
          <div className="myPage-info-history">
            <p>
              지난 3개월 간 글 <span className="white">{writeNum}</span>
              개, 댓글 <span className="white">{cmtNum}</span>개를 작성하고,
              좋아요 <span className="white">{likeNum}</span>개를 누르셨습니다.
              <br /> 솔직한 이야기를 나누고, 더 많은 글에 공감하고 참여해서{" "}
              <Link to="/" className="underline white">
                Blind MVP
              </Link>
              가 되어보세요!
            </p>
          </div>
        </div>
        <div className="myPage-settings">
          {/* <Link to="/mypage/mywrite" className="myPage-settings-btn">
            내가 작성한 글
          </Link> */}
          <Link to="/mypage/bookmark" className="myPage-settings-btn">
            북마크
          </Link>
          <Link to="/mypage/profile" className="myPage-settings-btn">
            닉네임 변경
          </Link>
          <Link to="/mypage/changepw" className="myPage-settings-btn">
            비밀번호 변경
          </Link>
          <button
            type="button"
            className="myPage-settings-btn"
            onClick={handleWithDrawPop}
          >
            회원 탈퇴
          </button>
          {withDrawPop ? (
            <StyledDelete>
              <div className="delete">
                <h2>정말로 탈퇴하시겠습니까?</h2>
                <div className="delete-btn">
                  <button type="button" onClick={handleWithDrawPop}>
                    취소
                  </button>
                  <button type="button" onClick={handleWithDraw}>
                    탈퇴
                  </button>
                </div>
              </div>
            </StyledDelete>
          ) : (
            ""
          )}
          {/* <Link to="/" className="myPage-settings-btn">
            설정
          </Link>
          <Link to="/" className="myPage-settings-btn">
            공지사항
          </Link>
          <Link to="/" className="myPage-settings-btn">
            고객센터
          </Link> */}
        </div>
      </div>
    </StyledMyPage>
  );
}

const StyledMyPage = styled.section`
  width: 100%;
  max-width: 1140px;
  /* height: calc((var(--vh, 1vh) * 100) - 122px); */
  margin: 0 auto;
  background-color: #eee;
  .myPage {
    &-info {
      height: 180px;
      @media screen and (max-width: 521px) {
        height: 205px;
      }
      background-color: #42424a;
      &-header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        color: #fff;
        span {
          font-size: 2.2rem;
          font-weight: 400;
        }
        a {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          height: 30px;
          padding: 15px;
          background-color: #3b3b43;
          color: #fff;
          i {
            margin-right: 5px;
          }
          /* &::before {
          display: inline-block;
          content: "";
          width: 16px;
          height: 16px;
        } */
        }
      }
      &-history {
        width: calc(100% - 40px);
        margin: 0 auto;
        padding: 15px 20px;
        background-color: #3b3b43;
        p {
          font-size: 1.3rem;
          color: rgb(255, 255, 255, 0.6);
          line-height: 2;
        }
      }
    }

    &-settings {
      width: 100%;
      height: 100%;
      &-btn {
        display: block;
        width: 100%;
        height: 50px;
        padding: 10px 20px;
        font-size: 1.5rem;
        color: #222;
        background-color: #fff;
        margin-top: 10px;
        line-height: 30px;
        text-align: left;
      }
    }
  }
`;

const StyledDelete = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  .delete {
    position: absolute;
    top: calc(50vh - 100px);
    left: calc(50vw - 200px);
    background-color: #fff;
    width: 280px;
    padding: 24px;
    overflow-y: hidden;
    h2 {
      padding: 16px 0 24px;
      font-size: 1.5rem;
      font-weight: 400;
      color: #222;
      text-align: center;
    }

    &-btn {
      display: flex;
      width: 100%;
      height: 48px;
      font-size: 16px;
      button:nth-child(1) {
        flex-grow: 1;
        background-color: #bbc0c5;
        color: #fff;
        margin: 0 6px;
      }
      button:nth-child(2) {
        flex-grow: 1;
        background-color: #222;
        margin: 0 6px;
        color: #fff;
      }
    }
  }
`;
