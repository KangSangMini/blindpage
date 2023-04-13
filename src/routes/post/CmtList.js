/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import logos from "../../assets/images/logos.png";
import Delete from "../../components/Delete";
import timeForToday from "../../utils/timeForToday";
import CmtEditEdit from "./CmtEditEdit";

export default function CmtList({ data, changeData, fixCmt }) {
  const uid = useSelector((store) => {
    return store.loginState.userId;
  });
  // const { cid } = data;
  // console.log(cid);

  const [countIndex, setCountIndex] = useState(-1);
  const [isDelPop, setIsDelPop] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleOnOff = (e, idx) => {
    if (idx === editIndex) {
      setEditIndex(-1);
    } else {
      setEditIndex(idx);
    }
    setCountIndex(-1);
  };
  const handleMoreBtn = (e, idx) => {
    if (idx === countIndex) {
      setCountIndex(-1);
    } else {
      setCountIndex(idx); // 다르면 바꿔줘라
    }
  };
  const handleDelPop = () => {
    setIsDelPop(!isDelPop);
  };
  const handleDelete = (cid) => {
    const deleteDate = async () => {
      try {
        const res = await axios({
          method: "delete",
          url: `http://43.200.254.222:3000/comment/delete/${cid}/${uid}`,
        });
        if (res.data.message === "delete success") {
          console.log(data);
          const newData = data.filter((v) => v.cid !== cid);
          console.log(newData);
          changeData(newData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    deleteDate();
  };

  return (
    <StyledCmtList>
      {data.map((cmt, idx) => {
        return (
          <>
            {idx !== editIndex ? (
              <div className="cmtList" key={cmt.cid}>
                <p className="cmtList-name">
                  <a href="/" className="point">
                    {cmt.company}
                  </a>{" "}
                  · {cmt.nick}
                </p>
                <p className="cmtList-txt">{cmt.content}</p>
                <div className="cmtList-info">
                  <span className="date">
                    <i className="blind">{cmt.date}</i>
                    {timeForToday(cmt.date)}
                  </span>
                  <div className="cmtList-info-more">
                    <button
                      className="cmtList-info-more-ico"
                      type="button"
                      onClick={(e) => handleMoreBtn(e, idx)}
                    >
                      <i className="blind">메뉴 더보기</i>
                    </button>
                    <StyledMoreBtn
                      className={countIndex === idx ? "active" : ""}
                    >
                      <ul>
                        <li
                          onClick={(e) => {
                            handleOnOff(e, idx);
                          }}
                        >
                          수정
                        </li>
                        <li onClick={handleDelPop}>삭제</li>
                        {isDelPop ? (
                          <Delete
                            handleDelPop={handleDelPop}
                            handleDelete={handleDelete}
                            cid={cmt.cid}
                          />
                        ) : (
                          ""
                        )}
                        <li className="moreBtn">
                          <span />
                          대댓글 쓰기
                        </li>
                      </ul>
                    </StyledMoreBtn>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {idx === editIndex ? (
              <CmtEditEdit
                content={cmt.content}
                cid={cmt.cid}
                handleOnOff={handleOnOff}
                fixCmt={fixCmt}
              />
            ) : (
              ""
            )}
            {/* 한 댓글 객체의 cid, 배열의 idx값(몇번째 객체인지) 넘긴다 */}
          </>
        );
      })}
    </StyledCmtList>
  );
}

const StyledCmtList = styled.section`
  width: 100%;
  .cmtList {
    color: #94969b;
    padding: 15px 20px;
    border-top: 1px solid #eee;
    &.off {
      display: none;
    }
    &-name {
      display: flex;
      gap: 2px;
      font-size: 1.2rem;
    }

    &-txt {
      font-size: 1.4rem;
      margin-top: 4px;
      color: #222;
    }

    &-info {
      position: relative;
      display: flex;
      gap: 14px;
      margin-top: 10px;
      font-size: 1.2rem;

      &-more {
        position: absolute;
        top: 0;
        right: 0;

        &-ico {
          font-weight: 700;
          &::before {
            display: inline-block;
            content: "";
            width: 16px;
            height: 16px;
            background: url(${logos}) no-repeat -166px -652px / 600px 900px;
          }
        }
      }
    }
  }
`;

const StyledMoreBtn = styled.div`
  display: none;
  position: absolute;
  right: 0;
  width: 118px;
  min-width: 62px;
  padding: 5px 15px 14px;
  background-color: #fff;
  border: 1px solid #d4d4d4;
  z-index: 9999;
  li {
    width: 100%;
    margin-top: 9px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #222;
    cursor: pointer;
  }
  &.active {
    display: block;
  }
`;

CmtList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      cid: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      nick: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  changeData: PropTypes.func.isRequired,
  fixCmt: PropTypes.func.isRequired,
};
