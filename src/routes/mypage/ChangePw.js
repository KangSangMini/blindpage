/* eslint-disable no-nested-ternary */
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ChangePw() {
  const navigate = useNavigate();
  const userId = useSelector((store) => {
    return store.loginState.userId;
  });
  // const reduxPwd = useSelector((store) => {
  //   return store.loginState.pwd;
  // }); // undefined

  // 비밀번호
  const [firstPwd, setFirstPwd] = useState("");
  const [secondPwd, setSecondPwd] = useState("");
  const [pwdSame, setPwdSame] = useState(false);
  // const [beforePwdCheck, setBeforePwdCheck] = useState("no");
  const [firstMessage, setFirstMessage] = useState(
    "새 비밀번호를 입력해주세요. (영문+숫자+특수문자 조합 8자 이상)"
  );
  const [pwdSameMessage, setPwdSameMessage] = useState("");

  const handleFirstPwd = (e) => {
    const firstValue = e.target.value;
    setFirstPwd(firstValue);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (firstPwd === "") {
      setFirstMessage(
        "새 비밀번호를 입력해주세요. (영문+숫자+특수문자 조합 8자 이상)"
      );
    } else if (passwordRegex.test(firstValue)) {
      setFirstMessage("사용 가능한 비밀번호입니다.");
      document.getElementById("firstMessage").style.color = "#37acc9";
    } else {
      setFirstMessage("영문+숫자+특수문자 조합 8자 이상으로 입력해주세요");
      document.getElementById("firstMessage").style.color = "red";
    }
  };

  const handleSecondPwd = (e) => {
    setSecondPwd(e.target.value);
    if (firstPwd === e.target.value) {
      setPwdSame(true);
      setPwdSameMessage("비밀번호가 일치합니다");
      document.getElementById("pwdSameMessage").style.color = "#37acc9";
    } else {
      setPwdSame(false);
      setPwdSameMessage("비밀번호가 일치하지 않습니다. 다시 입력해주세요");
      document.getElementById("pwdSameMessage").style.color = "red";
    }
    console.log(firstPwd);
    console.log(secondPwd);
    console.log(pwdSame);
  };

  const changePwd = () => {
    const putData = async () => {
      try {
        console.log(userId);
        console.log(secondPwd);
        await axios({
          method: "put",
          url: "http://43.200.254.222:3000/users/my_change_pwd",
          data: {
            uid: userId,
            pwd: secondPwd,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    putData();
    navigate("/mypage");
  };
  return (
    <StyledChangePw>
      <StyledTopBar>
        <div className="topbar">
          <Link to="/mypage" className="close">
            <i className="blind">Close</i>
          </Link>
          <div className="topbar-title">
            <span>비밀번호 변경</span>
          </div>
          <div className="topbar-apply">
            <button type="button" onClick={changePwd}>
              변경
            </button>
          </div>
        </div>
      </StyledTopBar>
      <div className="changePw">
        <form action="" className="changePw-form">
          <input
            type="password"
            placeholder="새 비밀번호"
            onChange={handleFirstPwd}
            value={firstPwd}
          />
          <p id="firstMessage">{firstMessage}</p>
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            onChange={handleSecondPwd}
            value={secondPwd}
          />
          <p id="pwdSameMessage">{pwdSameMessage}</p>
        </form>
      </div>
    </StyledChangePw>
  );
}

const StyledChangePw = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  .changePw {
    padding: 40px 20px;

    &-form {
      input {
        width: 100%;
        height: 40px;
        border: 1px solid #d4d4d4;
        background-color: #eff0f6;
        padding-left: 10px;
        &::placeholder {
          font-size: 1.4rem;
          color: gray;
        }
      }
      p {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        color: gray;
      }
    }
  }
`;

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
        color: #d4d4d4;
      }
    }
  }
`;
