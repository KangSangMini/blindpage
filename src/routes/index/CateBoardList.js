import React, { useEffect } from "react";
// import axios from "axios";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import CateBoard from "./CateBoard";
import { content } from "../../redux/slice/cateSlice";

export default function CateBoardList() {
  const dispatch = useDispatch();

  const { cate } = useSelector((store) => {
    return store.cateState;
  });

  useEffect(() => {
    cate.map((v, index) => {
      const getData = async () => {
        try {
          const res = await axios({
            method: "get",
            url: `http://43.200.254.222:3000/category/${v.name}`,
          });
          dispatch(content({ index, data: res.data.info }));
        } catch (error) {
          console.log(error);
        }
      };
      return getData();
    });
  }, []);

  return (
    <StyledCateBoardList>
      <div className="cateBoardList">
        {cate.map((data) => {
          return <CateBoard cate={data} />;
        })}
      </div>
    </StyledCateBoardList>
  );
}

const StyledCateBoardList = styled.section`
  @media screen and (min-width: 1100px) {
    .cateBoardList {
      display: flex;
      gap: 40px;
      flex-wrap: wrap;
    }
  }
`;
