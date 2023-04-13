/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

// state 초기상태 (store)
const initialState = {
  cmtWrite: false,
  cmtEdit: false,
  currentCmtNum: 0,
  currentPage: 0,
  currentCount: 10,
};

const cmtSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    write: (state) => {
      state.cmtWrite = !state.cmtWrite;
      state.cmtEdit = !state.cmtEdit;
    },
    cmtNumber: (state, action) => {
      state.currentCmtNum = Number(action.payload.number);
    },
    addPage: (state, action) => {
      state.currentPage = action.payload.pageNum;
    },
    changeCount: (state, action) => {
      state.currentCount = action.payload.count;
    },
  },
});

export const { write, cmtNumber, addPage, changeCount } = cmtSlice.actions;

export default cmtSlice.reducer;
