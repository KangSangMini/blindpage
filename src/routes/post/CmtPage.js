/* eslint-disable no-shadow */
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CmtList from "./CmtList";
import CmtWrite from "./CmtWrite";
import { addPage, changeCount, cmtNumber } from "../../redux/slice/cmtSlice";

export default function CmtPage() {
  const [data, changeData] = useState([]);
  const btnRef = useRef();
  const { bid } = useParams();
  const dispatch = useDispatch();

  // const {
  //   currentCmtNum: cmtNum,
  //   currentPage,
  //   currentCount,
  // } = useSelector((store) => {
  //   return store.cmtState;
  // });

  const currentCmtNum = useSelector((store) => {
    return store.cmtState.currentCmtNum;
  });
  const currentPage = useSelector((store) => {
    return store.cmtState.currentPage;
  });
  const currentCount = useSelector((store) => {
    return store.cmtState.currentCount;
  });

  const [cmtNum, changeCmtNum] = useState();

  useEffect(() => {
    dispatch(addPage({ pageNum: 0 }));
    dispatch(changeCount({ count: 10 }));
    changeCmtNum(currentCmtNum - 10);
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/comment/get/${bid}`,
        });
        changeData(res.data.info.rows.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    return () => {};
  }, []);

  const fixCmt = (cid, content) => {
    const newData = data.map((v) => {
      if (v.cid === cid) {
        const v1 = v;
        v1.content = content;
        return v1;
      }
      return v;
    });
    changeData(newData);
  };

  const moreCmt = () => {
    if (cmtNum > 0) {
      dispatch(addPage({ pageNum: currentPage + 1 }));
      console.log(currentCount);
      const getData = async () => {
        try {
          const res = await axios({
            method: "get",
            url: `http://43.200.254.222:3000/comment/get/${bid}?page=${
              currentPage + 1
            }&count=${currentCount}`,
          });
          changeData([...res.data.info.rows.reverse(), ...data]);
          cmtNumber({ number: cmtNum - currentCount });
          changeCmtNum(cmtNum - currentCount);
          dispatch(changeCount({ count: cmtNum }));
          console.log(cmtNum - 10);
          if (cmtNum - 10 < 10) {
            console.log("동작해?");
            dispatch(changeCount({ count: cmtNum - 10 }));
          }
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }
  };

  /* 
  data(state) = 위 서버에서 불러온 게시글 별 원래 있던 댓글들
  comment = CmtEdit에서 작성한 댓글 
  -> 서버에서 불러온 원래 댓글 아래에 추가 */
  const addComment = (comment) => {
    changeData([...data, comment]);
    console.log(comment);
  };

  console.log(data);

  return (
    <StyledCmtPage>
      <div className="cmtList">
        <CmtWrite addComment={addComment} />
        <div className="cmtList-more">
          <button type="button" onClick={moreCmt} ref={btnRef}>
            댓글 {cmtNum}개 더 보기
          </button>
        </div>
        <CmtList data={data} changeData={changeData} fixCmt={fixCmt} />
        {/* data = 댓글 배열들 */}
      </div>
    </StyledCmtPage>
  );
}

const StyledCmtPage = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  .cmtList {
    &-more {
      margin-top: 24px;
      border-top: 1px solid #eee;
      font-size: 1.4rem;
      text-align: center;
      line-height: 59px;
      button {
      }
    }
  }
`;
