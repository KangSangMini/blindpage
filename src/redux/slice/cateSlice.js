/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

// state 초기상태 (store)
const initialState = {
  cate: [
    {
      boardNum: 1,
      name: "Accounting",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 2,
      name: "animal",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 3,
      name: "car",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 4,
      name: "company",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 5,
      name: "employment",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 6,
      name: "entertainments",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 7,
      name: "game",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 8,
      name: "health",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 9,
      name: "hobby",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
    {
      boardNum: 10,
      name: "humor",
      logo: `${process.env.PUBLIC_URL}/images/topic-logo1.png`,
      content: [],
    },
  ],
};

const cateSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    content: (state, action) => {
      state.cate[action.payload.index].content = action.payload.data;
    },
  },
});

export const { content } = cateSlice.actions;

export default cateSlice.reducer;
