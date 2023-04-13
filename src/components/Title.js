import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Title({ title }) {
  return (
    <StyledTitle>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  .title {
    width: 100%;
    font-size: 1.8rem;
    font-weight: 900;
    padding: 20px;
    border-bottom: 1px solid #dfe1e4;
  }
  @media screen and (min-width: 1100px) {
    .title {
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 20px;
      border: 0;
      h1 {
        margin-top: 12px;
        padding: 20px 0 20px;
        border-width: 2px;
        font-size: 2.2rem;
        border-bottom: 2px solid #dfe1e4;
      }
    }
  }
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
