/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BoardMore from "../../components/BoardMore";
import BoardHeader from "../../components/BoardHeader";

export default function Topics() {
  const [cate, setCate] = useState("Accounting");
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("new");

  const getNewData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `http://43.200.254.222:3000/board/list/${cate}/new`,
      });
      setData(res.data.info.result);
      console.log(res.data.info.result);
    } catch (error) {
      console.log(error);
    }
  };
  const getThumbData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `http://43.200.254.222:3000/board/list/${cate}/thumb`,
      });
      setData(res.data.info.result);
      console.log(res.data.info.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getCateBoard = (e) => {
    setCate(e.target.innerText);
    if (order === "new") {
      getNewData();
    } else {
      getThumbData();
    }
    console.log(cate);
    console.log(order);
  };
  const getCateBoardSelect = (e) => {
    setCate(e.target.value);
    if (order === "new") {
      getNewData();
    } else {
      getThumbData();
    }
    console.log(cate);
    console.log(order);
  };

  useEffect(() => {
    getNewData();
  }, []);

  return (
    <StyledTopic>
      <div className="topics">
        <BoardHeader
          setOrder={setOrder}
          getCateBoardSelect={getCateBoardSelect}
          getNewData={getNewData}
          getThumbData={getThumbData}
        >
          <select className="topics-select" onChange={getCateBoardSelect}>
            <option value="Accounting">Accounting</option>
            <option value="animal">animal</option>
            <option value="car">car</option>
            <option value="company">company</option>
            <option value="employment">employment</option>
            <option value="entertainments">entertainments</option>
            <option value="game">game</option>
            <option value="sports">sports</option>
            <option value="health">health</option>
            <option value="hobby">hobby</option>
            <option value="humor">humor</option>
          </select>
          <ul className="flex">
            <li
              className={`${cate === "Accounting" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              Accounting
            </li>
            <li
              className={`${cate === "animal" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              animal
            </li>
            <li
              className={`${cate === "car" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              car
            </li>
            <li
              className={`${cate === "company" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              company
            </li>
            <li
              className={`${cate === "employment" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              employment
            </li>
            <li
              className={`${cate === "entertainments" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              entertainments
            </li>
            <li
              className={`${cate === "game" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              game
            </li>
            <li
              className={`${cate === "health" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              health
            </li>
            <li
              className={`${cate === "hobby" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              hobby
            </li>
            <li
              className={`${cate === "humor" ? "on" : ""}`}
              onClick={getCateBoard}
            >
              humor
            </li>
          </ul>
        </BoardHeader>
        <BoardMore data={data} />
      </div>
    </StyledTopic>
  );
}

const StyledTopic = styled.section`
  .topics {
    .boardHeader {
      border-top: 0;
    }

    .flex {
      display: none;
    }
    &-select {
      display: block;
    }
  }
  @media screen and (min-width: 1100px) {
    max-width: 1140px;
    margin: 0 auto;
    .topics {
      padding: 32px 20px;
      .flex {
        display: flex;
        .on {
          font-weight: 700;
          color: #222;
          border-bottom: 2px solid #222;
        }
      }
      &-select {
        display: none;
      }
    }
  }
`;
