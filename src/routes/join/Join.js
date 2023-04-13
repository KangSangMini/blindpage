/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios";

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .header {
    width: 100%;
    text-align: center;
    padding-top: 46px;
    span {
      color: white;
      font-size: 3rem;
      font-weight: 700;
    }
  }
  .body {
    width: 100%;
    height: 756px;
    padding-top: 62px;
    text-align: center;
    .body-text {
      padding-bottom: 28px;
    }
  }
  .find {
    padding-right: 207px;
    font-size: 12px;
    padding-top: 10px;
    padding-left: 44px;
    a {
      color: white;
    }
  }
  .find2 {
    font-size: 15px;
    padding-top: 60px;
    padding-bottom: 12px;
    span {
      color: white;
    }
  }
  .certification {
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    p {
      color: white;
      font-size: small;
      a {
        color: white;
        text-decoration: underline;
      }
    }
  }
  .footer {
    width: 100%;
    text-align: center;
    height: 50px;
    span {
      color: white;
      font-size: initial;
    }
    a {
      color: #03a9f4;
      font-size: initial;
    }
  }
  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: #bbbbbb75;
  }
`;
const GlobalStyle = createGlobalStyle`
      body {
        width: 100%;
        background-color: black;
      }
    `;

const Input = styled.input`
  width: 342px;
  height: 50px;
  font-size: 13px;
  margin-bottom: 9px;
  background-color: black;
  border: 1px solid #bbbbbb75;
  color: white;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 348px;
  height: 60px;
  background-color: red;
  border-color: red;
  cursor: pointer;
  color: white;
`;

const Button2 = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 348px;
  height: 60px;
  background-color: #1877f2;
  border-color: white;
  cursor: pointer;
  font-size: 1.4rem;
  color: #fff;
`;

function Join() {
  const [email, changeEmail] = useState("");
  const keyEvent = (event) => {
    changeEmail(event.target.value);
  };

  const navigate = useNavigate();

  const doneEmail = (e) => {
    // form으로 submit 이벤트 안 걸어줘도 되나
    e.preventDefault();
    if (email) {
      const postData = async () => {
        try {
          await axios({
            method: "post",
            url: "http://43.200.254.222:3000/users/auth_mail",
            data: {
              email,
            },
          });
        } catch (err) {
          console.log(err);
        }
      };
      postData();
      navigate(`/join/form?email=${email}`);
    }
  };
  return (
    <Wrap>
      <GlobalStyle />
      <div className="header">
        <div>
          <span>환영합니다!</span>
        </div>
      </div>
      <div className="body">
        <div>
          <Input
            placeholder="&nbsp;회사 이메일을 입력해주세요"
            value={email}
            onChange={keyEvent}
          ></Input>
        </div>
        <div>
          <Button onClick={doneEmail}>이메일 인증</Button>
        </div>
        <div className="find">
          <a href="https://kr.teamblind.com/logic" target="blank">
            왜 회사 이메일 계정이 필요한가요?
          </a>
        </div>
        <div className="find2">
          <span>회사 이메일로 인증 메일을 받고 싶지 않다면?</span>
        </div>
        <div>
          <a href="https://ko-kr.facebook.com/" target="blank">
            <Button2>Facebook으로 인증</Button2>
          </a>
        </div>
        <div className="certification">
          <p>
            인증 진행 시{" "}
            <a href="https://kr.teamblind.com/setting/term" target="blank">
              이용약관
            </a>{" "}
            및{" "}
            <a href="https://kr.teamblind.com/setting/term" target="blank">
              개인정보 취급방침
            </a>
            에 <br></br>동의하는 것으로 간주합니다.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="footer">
        <span>이미 회원이신가요?&nbsp;&nbsp;</span>

        <a href="/login">로그인</a>
      </div>
    </Wrap>
  );
}
export default Join;
