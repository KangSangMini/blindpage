import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/search");
    }
  };
  return (
    <Searchbox>
      <h1 className="blind">검색</h1>
      <span />
      <Input
        name="keyword"
        type="search"
        placeholder="관심있는 내용을 검색해보세요!"
        autoComplete="off"
        className="inp-srch"
        onKeyDown={handleSearchEnter}
      />
      <Button className="btn-srch" />
    </Searchbox>
  );
}
export default Search;

const Searchbox = styled.div`
  position: relative;
  display: block;
  @media screen and (min-width: 1100px) {
    padding-bottom: 22px;
  }
  input {
    width: 1086px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    [type="search" i] {
      appearance: auto;
      box-sizing: border-box;
      padding: 1px 2px;
    }
  }
  .blind {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    font-size: 1px;
    line-height: 100px;
    white-space: nowrap;
  }
  button {
    overflow: visible;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .btn-srch {
    position: absolute;
    z-index: 1;
    top: -46px;
    right: 157px;
    width: 30px;
    height: 30px;
    text-indent: -9999px;
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 24px;
      height: 24px;
      background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
        no-repeat;
      background-size: 600px 900px;
      background-position: -10px -350px;
      content: "";
    }
    @media screen and (min-width: 1100px) {
      top: 2px;
      right: auto;
      left: 10px;
      width: 56px;
      height: 56px;
      color: #fff;
    }
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  .inp-srch {
    display: none;
    @media screen and (min-width: 1100px) {
      display: block;
      width: 736px;
      height: 60px;
      padding: 0 10px 0 62px;
      border: 2px solid #222;
      border-radius: 30px;
      font-size: 18px;
      box-sizing: border-box;
    }
  }
`;

const Input = styled.input``;

const Button = styled.button`
  overflow: visible;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
