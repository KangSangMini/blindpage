/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector } from "react-redux";
import logos from "../../assets/images/logos.png";

export default function CmtEditEdit({ cid, content, handleOnOff, fixCmt }) {
  const uid = useSelector((store) => {
    return store.loginState.userId;
  });

  const [nowContent, setNowContent] = useState(content);

  const handleContent = (e) => {
    setNowContent(e.target.value);
  };
  const handleCancel = () => {
    handleOnOff();
  };

  const editComment = () => {
    const putData = async () => {
      try {
        const res = await axios({
          method: "put",
          url: `http://43.200.254.222:3000/comment/fix/${cid}`,
          data: {
            uid,
            cid,
            content: nowContent,
          },
        });
        if (res.status === 200) {
          fixCmt(cid, nowContent);
          handleOnOff();
        }
      } catch (error) {
        console.log(error);
      }
    };
    putData();
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
            onChange={handleContent}
            value={nowContent}
          />
        </div>
        <div className="cmtEdit-fnc">
          <button type="button" onClick={handleCancel}>
            취소
          </button>
          <button type="button" onClick={editComment}>
            수정
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
    &.on {
      display: block;
    }
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

CmtEditEdit.propTypes = {
  handleOnOff: PropTypes.func.isRequired,
  cid: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  fixCmt: PropTypes.func.isRequired,
};
