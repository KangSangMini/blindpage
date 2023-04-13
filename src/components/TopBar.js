import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import axios from "axios";

export default function TopBar({ title, btn, color }) {
  return (
    <StyledTopBar>
      <div className="topbar">
        <a href="/" className="close">
          <i className="blind">Close</i>
        </a>
        <div className="topbar-title">
          <span>{title}</span>
        </div>
        <div className="topbar-apply">
          <StyledTopBarBtn type="button" color={color}>
            {btn}
          </StyledTopBarBtn>
        </div>
      </div>
    </StyledTopBar>
  );
}

const StyledTopBar = styled.div`
  height: 54px;
  border-bottom: 1px solid #d4d4d4;
  .topbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    padding: 0 20px;
    font-size: 1.8rem;

    .close {
    }
    &-title {
    }
  }
`;

const StyledTopBarBtn = styled.button`
  font-size: 1.8rem;
  color: ${({ color }) => color};
`;

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  btn: PropTypes.string,
};

TopBar.defaultProps = {
  color: "#222",
  btn: "저장",
};
