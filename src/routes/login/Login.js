/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
// redux
import { useSelector, useDispatch } from "react-redux";
import { changeIsLogin, login } from "../../redux/slice/loginSlice";
import PopUp from "../../components/PopUp";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  .header {
    width: 100%;
    height: 57px;
    text-align: center;
    .header-text {
      padding-top: 10px;
    }
    span {
      color: white;
      font-size: xx-large;
    }
  }
  .body {
    width: 100%;
    height: 806px;
    padding-top: 118px;
    text-align: center;
    .body-text {
      padding-bottom: 28px;
    }
  }
  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: #bbbbbb75;
  }
  .ch {
    padding-bottom: 7px;
    span {
      font-size: 15px;
    }
  }
  .find {
    padding-right: 207px;
    font-size: 12px;
    padding-top: 10px;
    a {
      color: white;
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
      text-decoration: none;
      font-size: initial;
    }
  }
`;
const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    background-color: black;
  }
`;
const Logintext = styled.text`
  color: white;
  font-weight: 900;
  font-size: 23px;
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

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pop, setPop] = useState(false);

  const handlePop = () => {
    setPop(!pop);
  };

  const refBtn = useRef();

  const result = () => {
    // eslint-disable-next-line no-alert
    alert(
      "블라인드에서는 익명성 보장을 위한 장치로 인해 비밀번호를 잊어버리실 경우 찾을 수 없습니다. 만약 비밀번호를 분실한 경우 회사 이메일로 재인증하시면 언제든지 서비스를 다시 이용할 수 있습니다."
    );
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const navigateToLogined = () => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "post",
          url: "http://43.200.254.222:3000/users/login",
          data: {
            email,
            pwd,
          },
        });
        console.log(res);
        if (res.data.status === "success") {
          dispatch(
            login({
              userId: res.data.info.uid,
              email: res.data.info.email,
              nick: res.data.info.nick,
              company: res.data.info.company,
            })
          );
          dispatch(changeIsLogin({ isLogin: true }));
          navigate("/");
        } else {
          handlePop();
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };
    getData();
  };

  const checkLogin = useSelector((store) => {
    // eslint-disable-next-line no-console
    console.log(store);
    return store.loginState.isLogin;
  });
  // eslint-disable-next-line no-console
  console.log(checkLogin);

  return (
    <Wrap>
      <GlobalStyle />
      <div className="header">
        <div className="header-text">
          <span>로그인</span>
        </div>
      </div>
      <hr />
      <div className="body">
        <div className="body-text">
          <Logintext>블라인드에 로그인하세요</Logintext>
        </div>
        <div>
          <Input
            placeholder="&nbsp;회사 이메일 주소 (qwer)"
            onChange={changeEmail}
          />
        </div>
        <div>
          <Input placeholder="&nbsp;비밀번호 (1234)" onChange={changePwd} />
        </div>
        <div>
          <Button onClick={navigateToLogined} ref={refBtn}>
            로그인
          </Button>
        </div>
        <div className="find">
          ❔
          <a href="#" onClick={result}>
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
      <hr />
      <div className="footer">
        <span>아직 회원이 아니신가요?&nbsp;&nbsp;</span>
        <a href="/join">회원가입</a>
      </div>
      {pop ? <PopUp handlePop={handlePop} /> : ""}
    </Wrap>
  );
}

export default Login;
