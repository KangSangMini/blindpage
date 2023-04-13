import axios from "axios";
import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeIsLogin, login } from "../../redux/slice/loginSlice";

export default function AfterCert() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refInput = useRef();
  const refExplain = useRef();
  const refPwdCheck = useRef();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const email = params.get("email"); // 입력한 메일 주소

  // state
  const [nick, setNick] = useState("");
  const [company, setCompany] = useState("");
  const [digit, setDigit] = useState("");
  const [digitMsg, setDigitMsg] = useState(
    "메일로 받은 인증번호를 입력해주세요."
  );
  const [firstPwd, setFirstPwd] = useState("");
  const [firstMessage, setFirstMessage] = useState(
    " 새 비밀번호를 입력해주세요. (영문+숫자+특수문자 조합 8자 이상)"
  );
  const [secondPwd, setSecondPwd] = useState("");
  const [pwdSameMessage, setPwdSameMessage] =
    useState("비밀번호를 한번 더 입력해주세요");

  const handleFirstPwd = (e) => {
    const firstValue = e.target.value;
    setFirstPwd(firstValue);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    console.log(firstPwd);
    if (firstValue.length < 1) {
      setFirstMessage(
        "새 비밀번호를 입력해주세요. (영문+숫자+특수문자 조합 8자 이상)"
      );
      refExplain.current.style.color = "#ccc";
    } else if (passwordRegex.test(firstValue)) {
      setFirstMessage("사용 가능한 비밀번호입니다.");
      refExplain.current.style.color = "#37acc9";
    } else {
      setFirstMessage("영문+숫자+특수문자 조합 8자 이상으로 입력해주세요.");
      refExplain.current.style.color = "red";
    }
  };

  const handleSecondPwd = (e) => {
    const secondValue = e.target.value;
    setSecondPwd(secondValue);
    if (secondValue.length < 1) {
      setPwdSameMessage("비밀번호를 한번 더 입력해주세요");
      refPwdCheck.current.style.color = "#ccc";
    } else if (firstPwd === e.target.value) {
      setPwdSameMessage("비밀번호가 일치합니다");
      refPwdCheck.current.style.color = "#37acc9";
    } else {
      setPwdSameMessage("비밀번호가 일치하지 않습니다. 다시 입력해주세요");
      refPwdCheck.current.style.color = "red";
    }
  };

  // setter
  const handleNick = (e) => {
    setNick(e.target.value);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const checkDigit = (e) => {
    setDigit(e.target.value);
    console.log(digit);
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/users/auth_check?email=${email}&digit=${e.target.value}`,
        });
        console.log(res);
        if (res.data.status === "success") {
          setDigitMsg("일치합니다");
          refInput.current.disabled = true;
          document.getElementById("digitMsg").style.color = "#37acc9";
        } else {
          setDigitMsg("일치하지 않습니다. 다시 확인해주세요");
          document.getElementById("digitMsg").style.color = "red";
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };

  const submitJoin = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const res = await axios({
          method: "post",
          url: "http://43.200.254.222:3000/users/signup",
          data: {
            email,
            pwd: secondPwd,
            nick,
            company,
          },
        });
        console.log(res);
        if (res.data.message === "sign complete") {
          console.log(1);
          dispatch(
            login({
              email,
              userId: res.data.info.u_id,
              nick,
              company,
            })
          );
          dispatch(changeIsLogin({ isLogin: true }));
          console.log(2);
          navigate("/");
        } else {
          alert("회원가입 안됨!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  };

  return (
    <StyledAfterCert>
      <div className="afterCert">
        <div className="afterCert-header">
          <h1>회원 가입</h1>
        </div>
        <div className="afterCert-body">
          <div className="afterCert-body-text">
            <p>비밀번호와 닉네임을 설정하세요</p>
            <p>
              비밀번호를 꼭 기억해주세요!
              <br />
              비밀번호를 잊어버리실 경우 찾을 수 없습니다
            </p>
          </div>
          <div className="afterCert-body-form">
            <form onSubmit={submitJoin}>
              <input
                type="text"
                placeholder="인증번호"
                onChange={checkDigit}
                ref={refInput}
              />
              <p className="afterCert-body-form-explain" id="digitMsg">
                {digitMsg}
              </p>
              <input type="text" placeholder="이메일" disabled value={email} />
              <p className="afterCert-body-form-explain">
                이메일을 입력해주세요.
              </p>
              <input
                type="text"
                placeholder="회사 이름"
                onChange={handleCompany}
              />
              <p className="afterCert-body-form-explain">
                회사 이름을 입력해주세요.
              </p>
              <input
                type="text"
                placeholder="닉네임"
                onChange={handleNick}
                maxLength="10"
              />
              <p className="afterCert-body-form-explain">
                닉네임을 입력해주세요. (10자 이내)
              </p>
              <input
                type="password"
                placeholder="비밀번호"
                onChange={handleFirstPwd}
                value={firstPwd}
              />
              <p className="afterCert-body-form-explain" ref={refExplain}>
                {firstMessage}
              </p>
              <input
                type="password"
                placeholder="비밀번호 확인"
                onChange={handleSecondPwd}
                value={secondPwd}
              />
              <p className="afterCert-body-form-explain" ref={refPwdCheck}>
                {pwdSameMessage}
              </p>
              <button className="afterCert-body-form-btn" type="submit">
                가입
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledAfterCert>
  );
}

const StyledAfterCert = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .afterCert {
    width: 100%;
    &-header {
      height: 60px;
      border-bottom: 5px solid #c14949;
      h1 {
        font-size: 2rem;
        text-align: center;
        line-height: 60px;
      }
    }

    &-body {
      padding: 20px;
      &-text {
        p:nth-child(1) {
          font-size: 2.2rem;
          font-weight: 700;
          text-align: center;
          margin-top: 20px;
        }
        p:nth-child(2) {
          font-size: 1.5rem;
          text-align: center;
          margin-top: 10px;
        }
      }
      &-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
        margin-top: 10px;
        input {
          min-width: 400px;
          padding: 15px;
          border: 1px solid #ddd;
          font-size: 1.5rem;
          color: #222;
          margin-top: 20px;
          &::placeholder {
            color: #ccc;
          }
        }
        &-explain {
          font-size: 1.5rem;
          color: #ccc;
          margin-top: 10px;
        }
        &-btn {
          display: block;
          width: 100%;
          height: 56px;
          background-color: #c14949;
          margin-top: 30px;
          font-size: 1.8rem;
          color: #fff;
        }
      }
    }
    @media screen and (min-width: 1100px) {
      max-width: 500px;
    }
  }
`;
