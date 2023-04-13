import React from "react";
import styled from "styled-components";
import Board from "./Board";
import CateBoardList from "./CateBoardList";
import Search from "../../components/Search";

export default function Home() {
  return (
    <StyledHome>
      <div className="home">
        <Search />
        <Board />
        <CateBoardList />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.section`
  @media screen and (min-width: 1100px) {
    width: 100vw;
    .home {
      max-width: 1140px;
      padding: 40px 20px;
      margin: 0 auto;
    }
    .cateBoardList {
      margin-top: 45px;
    }
  }
`;
