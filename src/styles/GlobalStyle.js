import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import logos from "../assets/images/logos.png";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto','Noto Sans KR',AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
    font-size: 62.5%;
  }
  body {
    line-height: 1.5;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer
  }
  input, textarea, select {
    border: none;
    font-family: "Roboto", "Noto Sans KR", sans-serif;
    resize: none;
    :focus {
      outline: none;
    }
  }

  /* 공통 클래스 */
  .blind {
    display: none;
  }
  .point {
    color: #37acc9;
  }
  .bold700 {
    font-weight: 700;
  }
  .bold {
    font-weight: 900;
  }
  .underline {
    text-decoration: underline;
  }
  /* color */
  .white {
    color: #fff;
  }
  #blue {
    color: #37acc9;
  }
  #red {
    color: red;
  }
  #lightgray, .lightgray {
    color: #d4d4d4;
  }
  /* 아이콘 */
  .date {
    display: inline-block;
    font-size: 1.2rem;
    color: #94969b;
    &::before {
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      background: url(${logos}) no-repeat -88px -600px / 600px 900px;
      vertical-align: top;
      margin-right: 3px;
    }
  }
  .view {
    display: inline-block;
    font-size: 1.2rem;
    color: #94969b;
    &::before {
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      background: url(${logos}) no-repeat -10px -600px / 600px 900px;
      vertical-align: top;
      margin-right: 3px;
    }
  }
  .like {
    display: inline-block;
    font-size: 1.2rem;
    color: #94969b;
    &::before {
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      background: url(${logos}) no-repeat -62px -600px / 600px 900px;
      vertical-align: top;
      margin-right: 3px;
    }
    &.on {
      display: inline-block !important;
      font-size: 1.2rem !important;
      color: #94969b !important;
      &::before {
        display: inline-block !important;
        content: "" !important;
        width: 16px !important;
        height: 16px !important;
        background: url(${logos}) no-repeat -160px -484px / 600px 900px !important;
        vertical-align: top !important;
        margin-right: 3px !important;
      }
    }
  }
  .comment {
    font-size: 1.2rem;
    color: #94969b;
    &::before {
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      background: url(${logos}) no-repeat -36px -600px / 600px 900px;
      vertical-align: top;
      margin-right: 3px;
    }
  }
  .bookmark {
    margin-right: 2px;
    &::before {
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      background: url(${logos}) no-repeat -88px -652px / 600px 900px;
      vertical-align: top;
    }
  }
  .bookmark.on {
    margin-right: 2px;
    &::before {
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      background: url(${logos}) no-repeat -140px -652px / 600px 900px;
    }
  }
  .moreBtn {
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url(${logos}) no-repeat -270px -626px / 600px 900px;
      vertical-align: middle;
      margin-right: 4px;
    }   
  }
  .close {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(${logos}) no-repeat -294px -294px / 504px 756px;
  }
`;

export default GlobalStyle;
