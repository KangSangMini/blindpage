import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BoardMore from "../../components/BoardMore";
import BoardHeader from "../../components/BoardHeader";

export default function SearchResult({ searchValue }) {
  const [result, setResult] = useState("키보드");
  const handleResult = (e) => {
    setResult(e.target.value);
  };
  return (
    <StyledSrchResult>
      <div className="srchResult">
        <div className="srchResult-form">
          <input
            type="search"
            name="keyword"
            autoComplete="off"
            value={result}
            placeholder="관심있는 내용을 검색해보세요!"
            onChange={handleResult}
          />
        </div>
        <h1 className="srchResult-tit">
          <span className="bold">{searchValue}</span> 검색결과
        </h1>
        <BoardHeader>
          <select name="" id="">
            <option value="0">블라마켓</option>
            <option value="1">블라마켓</option>
            <option value="2">블라마켓</option>
            <option value="3">블라마켓</option>
            <option value="4">블라마켓</option>
            <option value="5">블라마켓</option>
            <option value="6">블라마켓</option>
            <option value="7">블라마켓</option>
            <option value="8">블라마켓</option>
            <option value="9">블라마켓</option>
          </select>
        </BoardHeader>
        <BoardMore />
      </div>
    </StyledSrchResult>
  );
}

const StyledSrchResult = styled.section`
  .srchResult {
    padding: 0;

    &-form {
      padding: 20px;
      input {
        width: 100%;
        padding: 0 18px;
        font-size: 1.4rem;
        line-height: 38px;
        border: 1px solid #d4d4d4;
        border-radius: 20px;
      }
    }

    &-header {
      display: flex;
      padding: 0 15px;
      border-top: 1px solid #d4d4d4;
      border-bottom: 1px solid #d4d4d4;
      &-cate {
        min-width: calc(100% - 100px);
        border-right: 1px solid #d4d4d4;
        padding-right: 15px;
        select {
          width: 100%;
          height: 46px;
          border: 0;
          font-size: 1.2rem;
        }
      }
      &-sort {
        min-width: 100px;
        padding-left: 15px;
        select {
          width: 100%;
          height: 46px;
          border: 0;
          font-size: 1.2rem;
        }
      }
    }

    &-tit {
      display: none;
    }
  }
  @media screen and (min-width: 1100px) {
    max-width: 1140px;
    margin: 0 auto;
    .srchResult {
      padding: 40px 20px;
      &-form {
        display: none;
      }

      &-tit {
        display: block;
        padding-bottom: 40px;
        font-size: 2rem;
      }

      &-header {
        padding: 0;
        border: 0;
        &-cate {
          border: 0;
          select {
            height: 33px;
          }
        }
        &-sort {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 1px;
            height: 12px;
            background-color: #ccc;
          }
          select {
            height: 33px;
          }
        }
      }
    }
  }
`;

SearchResult.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
