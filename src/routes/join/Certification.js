/* eslint-disable no-console */
import React from "react";
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

function Certification() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const email = params.get("email"); // 입력한 메일 주소
  console.log(params);
  console.log(email);

  return (
    <Wrap>
      <GlobalStyle />
      <div>
        <div>
          <span className="s1">링크를 보냈습니다</span>
        </div>
        <div>
          <span className="s2">{email}</span>
          <span>으로</span>
        </div>
        <div>
          <span>인증메일이 발송되었습니다.</span>
        </div>
        <div>
          <Button>
            메일에 있는 <p>&apos;인증하기&apos;버튼</p> 혹은 <p>링크</p>를
            클릭해 주세요.
          </Button>
        </div>
        <div className="footer">
          <span>메일을 받지 못하신 경우 스팸메일함을 확인해주세요.</span>
        </div>
      </div>
    </Wrap>
  );
}

export default Certification;

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    background-color: black;
  }
`;

const Wrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
  div {
    padding-bottom: 15px;
  }
  h1 {
    color: white;
  }
  span {
    color: white;
    font-size: 1.5rem;
  }
  .footer {
    text-align: start;
  }
  .s1 {
    font-size: 3.2rem;
    font-weight: bold;
  }
  .s2 {
    color: orange;
  }
  p {
    font-size: 1.8rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 60px;
  background-color: red;
  border-color: red;
  color: white;
  cursor: default;
`;
