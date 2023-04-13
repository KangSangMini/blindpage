/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

// state 초기상태 (store)
const initialState = {
  userId: "",
  nick: "",
  company: "",
  isLogin: false,
};

// redux의 초기상태
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // 초기상태 바꿀 수 있는 함수
    login: (state, action) => {
      state.userId = action.payload.userId;
      state.nick = action.payload.nick;
      state.company = action.payload.company;
    },
    changeIsLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },
    changeNickName: (state, action) => {
      state.nick = action.payload.nick;
    },
  },
});

export const { login, changeIsLogin, changeNickName } = loginSlice.actions;

export default loginSlice.reducer;
