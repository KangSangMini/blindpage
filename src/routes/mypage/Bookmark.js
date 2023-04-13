import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BoardMore from "../../components/BoardMore";
import Title from "../../components/Title";

export default function Bookmark() {
  const uid = useSelector((store) => {
    return store.loginState.userId;
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://43.200.254.222:3000/users/markget/${uid}`,
        });
        setData(res.data.info.result);
        console.log(res.data.info.result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {};
  }, []);

  return (
    <StyledBookmark>
      <Title title="북마크" />
      <BoardMore data={data} />
    </StyledBookmark>
  );
}

const StyledBookmark = styled.section``;
