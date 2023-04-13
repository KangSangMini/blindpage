import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logos from "../../assets/images/logos.png";
import CmtEdit from "./CmtEdit";
import { write, cmtNumber } from "../../redux/slice/cmtSlice";

export default function CmtWrite({ addComment }) {
  const dispatch = useDispatch();
  const { bid } = useParams();
  // const [isEdit, setIsEdit] = useState(false);
  const [cmtNum, setCmtNum] = useState("");

  const cmtWrite = useSelector((store) => {
    return store.cmtState.cmtWrite;
  });

  const handleWrite = () => {
    dispatch(write());
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          metho: "get",
          url: `http://43.200.254.222:3000/comment/count/${bid}`,
        });
        setCmtNum(res.data.info.count[0].count);
        dispatch(cmtNumber({ number: res.data.info.count[0].count }));
        console.log(res.data.info.count[0].count);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {};
  }, []);

  return (
    <StyledCmtWrite>
      <div className="cmtWrite">
        <div className="cmtWrite-top">
          <span>댓글</span>
          <span>{cmtNum}</span>
        </div>
        <div className="cmtWrite-bot">
          {!cmtWrite ? (
            <div className="cmtWrite-bot-before">
              <button type="button" onClick={handleWrite}>
                댓글을 남겨주세요
              </button>
            </div>
          ) : (
            <CmtEdit handleWrite={handleWrite} addComment={addComment} />
          )}
        </div>
      </div>
    </StyledCmtWrite>
  );
}

const StyledCmtWrite = styled.section`
  width: 100%;
  .cmtWrite {
    padding: 20px;
    font-size: 1.4rem;
    color: #222;
    line-height: 1.2;
    word-wrap: break-word;
    &-top {
      font-weight: 700;
      span {
        margin-right: 5px;
      }
    }
    &-bot {
      margin-top: 19px;
      &-before {
        button {
          position: relative;
          width: 100%;
          height: 54px;
          padding-left: 48px;
          border: 1px solid #d4d4d4;
          text-align: left;
          &::before {
            position: absolute;
            top: 50%;
            left: 17px;
            transform: translateY(-50%);
            display: inline-block;
            content: "";
            width: 20px;
            height: 20px;
            background: url(${logos}) no-repeat -8.4px -322.56px / 504px 756px;
          }
        }
      }
      &-after {
      }
    }
  }
`;

CmtWrite.propTypes = {
  addComment: PropTypes.func.isRequired,
};
