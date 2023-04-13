import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MoreButton from "../../components/MoreButton";

export default function CateBoard({ cate }) {
  return (
    <StyledCateBoard>
      <div className="cateBoard" key={cate.boardNum}>
        <h2 className="cateBoard-topic">
          <i className="ico">
            <img src={cate.logo} alt="로고" />
          </i>
          {cate.name}
        </h2>
        {cate.content.map((content) => {
          return (
            <div className="cateBoard-article" key={content.bid}>
              <a href={`/post/${content.bid}`}>{content.title}</a>
              <div className="cateBoard-article-view">
                <a href="/" className="view">
                  {content.comment}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <MoreButton url="topics" />
    </StyledCateBoard>
  );
}

const StyledCateBoard = styled.section`
  color: #222;
  font-family: "Roboto", sans-serif;
  border-bottom: 8px solid #e9e9e9;
  .cateBoard {
    padding: 0 20px;

    &-topic {
      position: relative;
      padding-left: 36px;
      height: 54px;
      font-size: 1.4rem;
      font-weight: 900;
      line-height: 54px;
      border-bottom: 1px solid #eee;
      img {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
      }
    }

    &-article {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      font-size: 1.4rem;
      border-bottom: 1px solid #f5f5f5;
      &-view {
        a {
          width: 48px;
          white-space: nowrap;
          &::before {
            vertical-align: middle;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    position: relative;
    flex-basis: calc(50% - 20px);
    flex-shrink: 0;
    border: 0;
    .cateBoard {
      padding: 0;
      &-topic {
        font-size: 1.8rem;
        border-bottom-width: 2px;
        padding-left: 35px;
        img {
        }
      }
      &-article {
        line-height: 30px;
        padding: 0;
        color: #222;
        border: 0;
        &:nth-child(2) {
          padding-top: 9px;
        }
      }
    }
  }
`;

CateBoard.propTypes = {
  cate: PropTypes.shape({
    boardNum: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        contentNum: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        view: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
