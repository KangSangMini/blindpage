import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWarp>
      <div className="wrapped">
        <div className="info">
          <a
            href="https://www.teamvlind.com/kr/introduce"
            className="a1"
            target="blank"
          >
            서비스 소개
          </a>
          <a href="https://kr.teamblind.com/setting/term" target="blank">
            이용약관
          </a>
          <a href="https://www.teamblind.com/kr/sitemap" target="blank">
            디렉토리
          </a>
          <a href="https://kr.teamblind.com/setting/privacy" target="blank">
            개인정보 처리방침
          </a>
          <a href="https://www.teamblind.com/kr/contact-us" target="blank">
            Blind Hub 기업서비스
          </a>
          <a href="https://www.teamblind.com/kr/report-quide" target="blank">
            신고가이드
          </a>
          <p className="copy">ⓒ 2020 Teamblind. Inc</p>
        </div>
        <div className="app-download">
          <a
            href="https://apps.apple.com/kr/app/id737534965"
            className="appStore"
          >
            APP STORE
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.teamblind.blind&pli=1"
            className="googlePlay"
          >
            GOOGLE PLAY
          </a>
        </div>
      </div>
    </FooterWarp>
  );
}
export default Footer;

const FooterWarp = styled.div`
  position: relative;
  display: block;
  @media screen and (min-width: 1100px) {
    margin-top: 60px;
    border-top: 1px solid #d4d4d4;
    text-align: left;
  }
  a {
    text-decoration: none;
    color: #222;
    cursor: pointer;
  }
  .wrapped {
    padding: 0 0 20px;
    box-sizing: border-box;
    @media screen and (min-width: 1100px) {
      position: relative;
      max-width: 1140px;
      height: 125px;
      margin: 0 auto;
      padding-top: 24px;
    }
  }
  .info {
    padding: 17px 20px 20px;
    font-size: 0;
    @media screen and (min-width: 1100px) {
      padding: 0 20px;
    }
    a {
      position: relative;
      display: inline-block;
      width: 50%;
      height: 28px;
      padding: 0;
      color: #94969b;
      font-size: 14px;
      line-height: 28px;
      font-weight: bold;
      @media screen and (min-width: 1100px) {
        width: auto;
        padding: 0 10px 0 11px;
      }
    }
    a::before {
      @media screen and (min-width: 1100px) {
        position: absolute;
        top: calc(50% - 5px);
        left: 0;
        width: 1px;
        height: 10px;
        background: #d4d4d4;
        content: "";
      }
    }
    .a1 {
      @media screen and (min-width: 1100px) {
        padding-left: 0;
      }
    }
    .copy {
      margin-top: 16px;
      color: #bbc0c5;
      font-size: 12px;
      @media screen and (min-width: 1100px) {
        margin-top: 6px;
        font-size: 14px;
      }
    }
  }
  .app-download {
    text-align: center;
    @media screen and (min-width: 1100px) {
      position: absolute;
      top: 30px;
      right: 12px;
      bottom: auto;
      left: auto;
      margin: 0;
      font-size: 0;
      text-align: right;
    }
    a {
      display: inline-block;
      width: 152px;
      height: 44px;
      margin: 0 8px;
      background-color: #f2f2f3;
      border-radius: 22px;
      color: #222;
      font-size: 12px;
      line-height: 44px;
      text-align: center;
      box-sizing: border-box;
      &::before {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin: 11px 8px 0 0;
        vertical-align: top;
        content: "";
      }
    }
    .appStore::before {
      background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
        no-repeat;
      background-size: 600px 900px;
      background-position: -78px -350px;
    }
    .googlePlay::before {
      background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022)
        no-repeat;
      background-size: 600px 900px;
      background-position: -146px -350px;
    }
  }
`;
