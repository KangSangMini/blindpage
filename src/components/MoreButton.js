import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function MoreButton({ url }) {
  return (
    <StyledMoreButton>
      <a href={`/${url}`}>더보기 {">"}</a>
    </StyledMoreButton>
  );
}

const StyledMoreButton = styled.div`
  a {
    display: block;
    padding: 14px 0;
    text-align: center;
    font-size: 1.4rem;
    color: #94969b;
  }
  @media screen and (min-width: 1100px) {
    position: absolute;
    top: 0;
    right: 0;
    a {
      color: #222;
    }
  }
`;

MoreButton.propTypes = {
  url: PropTypes.string.isRequired,
};
