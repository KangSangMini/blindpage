import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function PopUp({ handlePop }) {
  const check = () => {
    handlePop();
  };
  return (
    <StyledPopUp>
      <div className="popup">
        <h2>일치하는 정보가 없습니다</h2>
        <div className="popup-btn">
          <button type="button" onClick={check}>
            확인
          </button>
        </div>
      </div>
    </StyledPopUp>
  );
}

const StyledPopUp = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

PopUp.propTypes = {
  handlePop: PropTypes.func.isRequired,
};
