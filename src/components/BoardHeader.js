import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function BoardHeader({
  children,
  setOrder,
  getNewData,
  getThumbData,
  // getCateBoardSelect,
}) {
  const handleOrder = (e) => {
    setOrder(e.target.value);
    if (e.target.value === "new") {
      getNewData();
    } else {
      getThumbData();
    }
  };
  return (
    <StyledBoardHeader>
      <div className="boardHeader">
        <div className="boardHeader-cate">{children}</div>
        <div className="boardHeader-line" />
        <div className="boardHeader-sort">
          <select onChange={handleOrder}>
            <option value="new">최신순</option>
            <option value="thumb">추천순</option>
          </select>
        </div>
      </div>
    </StyledBoardHeader>
  );
}

const StyledBoardHeader = styled.div`
  .boardHeader {
    display: flex;
    padding: 0 15px;
    width: 100%;
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
        cursor: pointer;
      }
      li {
        cursor: pointer;
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
  @media screen and (min-width: 1100px) {
    max-width: 1140px;
    height: 33px;
    padding: 0 0 33px 0;
    border-bottom: 2px solid #eee;
    .boardHeader {
      position: relative;
      padding: 0;
      border: 0;
      &-cate {
        border: 0;
        select {
          font-size: 1.4rem;
          height: 33px;
        }
        .flex {
          display: flex;
          align-items: center;
          height: 33px;
          gap: 24px;
          font-size: 1.4rem;
          color: #94969b;
          li {
            height: 33px;
          }
        }
        &::before {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #eee;
        }
      }
      &-sort {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 12px;
          background-color: #ccc;
        }
        select {
          width: 100px;
          height: 33px;
          font-size: 1.4rem;
        }
      }
    }
  }
`;

BoardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  setOrder: PropTypes.func.isRequired,
  // getCateBoardSelect: PropTypes.func.isRequired,
  getNewData: PropTypes.func.isRequired,
  getThumbData: PropTypes.func.isRequired,
};
