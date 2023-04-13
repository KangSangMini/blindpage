import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Delete({ handleDelPop, handleDelete, cid }) {
  const handleClose = () => {
    handleDelPop();
    handleDelete(cid);
  };
  return (
    <StyledDelete>
      <div className="delete">
        <h2>삭제하시겠습니까?</h2>
        <div className="delete-btn">
          <button type="button" onClick={handleClose}>
            유지
          </button>
          <button type="button" onClick={handleClose}>
            삭제
          </button>
        </div>
      </div>
    </StyledDelete>
  );
}

const StyledDelete = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  .delete {
    position: absolute;
    top: calc(50vh - 100px);
    left: calc(50vw - 200px);
    background-color: #fff;
    width: 280px;
    padding: 24px;
    overflow-y: hidden;
    h2 {
      padding: 16px 0 24px;
      font-size: 1.5rem;
      font-weight: 400;
      color: #222;
      text-align: center;
    }

    &-btn {
      display: flex;
      width: 100%;
      height: 48px;
      font-size: 16px;
      button:nth-child(1) {
        flex-grow: 1;
        background-color: #bbc0c5;
        color: #fff;
        margin: 0 6px;
      }
      button:nth-child(2) {
        flex-grow: 1;
        background-color: #222;
        margin: 0 6px;
        color: #fff;
      }
    }
  }
`;

Delete.propTypes = {
  handleDelPop: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  cid: PropTypes.number.isRequired,
};
