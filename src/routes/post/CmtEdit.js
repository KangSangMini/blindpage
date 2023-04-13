/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import logos from "../../assets/images/logos.png";

export default function CmtEdit({ handleWrite, addComment }) {
  const {
    userId: uid,
    company,
    nick,
  } = useSelector((store) => {
    return store.loginState;
  });

  const { bid } = useParams();

  const [content, setContent] = useState("");

  const handleWriteChild = () => {
    handleWrite();
  };
  const handleComment = (e) => {
    setContent(e.target.value);
  };

  const submitComment = () => {
    const getData = async () => {
      try {
        console.log(bid, uid, content);
        const res = await axios({
          method: "post",
          url: `http://43.200.254.222:3000/comment/write`,
          data: {
            bid,
            uid,
            content,
          },
        });
        console.log(res);
        if (res.status === 201) {
          // 성공했을 때 -> 접고, 댓글 추가
          const comment = {
            cid: Number(res.data.cid),
            company,
            nick,
            content,
            date: new Date().toString(),
          };
          addComment(comment);
          console.log(comment);
        } else {
          console.log("댓글 추가 실패");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    handleWrite();
  };

  return (
    <StyledCmtEdit>
      <div className="cmtEdit">
        <span className="attach-file">
          <label htmlFor="inpfile">
            <i className="blind">파일 첨부하기</i>
          </label>
          <input type="file" name="file" id="inpfile" />
        </span>
        <div className="cmtEdit-textarea">
          <textarea
            name="content"
            id=""
            rows="4"
            placeholder="댓글을 남겨주세요"
            onChange={handleComment}
          />
        </div>
        <div className="cmtEdit-fnc">
          <button type="button" onClick={handleWriteChild}>
            취소
          </button>
          <button type="button" onClick={submitComment}>
            등록
          </button>
        </div>
      </div>
    </StyledCmtEdit>
  );
}

const StyledCmtEdit = styled.section`
  width: 100%;
  .cmtEdit {
    position: relative;
    padding: 17px 14px;
    border: 1px solid #d4d4d4;
    width: 100%;
    .attach-file {
      position: absolute;
      top: 17px;
      left: 17px;
      label {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${logos}) no-repeat -8.4px -322.56px / 504px 756px;
      }
      input {
        display: none;
      }
    }
    &-textarea {
      width: calc(100% - 29px);
      margin-left: 29px;
      textarea {
        width: 100%;
        overflow-y: hidden;
        padding: 0 4px;
        font-size: 1.4rem;
      }
    }

    &-fnc {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      button:nth-child(1) {
        color: #bbc0c5;
        font-weight: 900;
      }
      button:nth-child(2) {
        color: #da3238;
        font-weight: 900;
      }
    }
  }
`;

CmtEdit.propTypes = {
  handleWrite: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};
