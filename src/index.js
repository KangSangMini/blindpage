import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store/store";

// 컴포넌트
import Main from "./Main";
import Home from "./routes/index/Home";
import ErrorPage from "./ErrorPage";

import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Login from "./routes/login/Login";
import Join from "./routes/join/Join";
import Write from "./routes/index/Write";
import CmtPage from "./routes/post/CmtPage";
import Delete from "./components/Delete";
import Post from "./routes/post/Post";
import Certification from "./routes/join/Certification";
import MyPage from "./routes/mypage/MyPage";
import Profile from "./routes/mypage/Profile";
import ChangePw from "./routes/mypage/ChangePw";
import SrchResult from "./routes/search/SrchResult";
import Topics from "./routes/topics/Topics";
import MyWrite from "./routes/mypage/MyWrite";
import Bookmark from "./routes/mypage/Bookmark";
import AfterCert from "./routes/join/AfterCert";
import Edit from "./routes/post/Edit";
import Members from "./routes/members/Members";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post/:bid",
        element: <Post />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/write",
        element: <Write />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/post/:bid/edit",
        element: <Edit />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/comment",
        element: <CmtPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/delete",
        element: <Delete />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mypage/profile",
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mypage/changepw",
        element: <ChangePw />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mypage/mywrite",
        element: <MyWrite />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mypage/bookmark",
        element: <Bookmark />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/topics",
        element: <Topics />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: <SrchResult />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/join",
    element: <Join />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/join/certification",
    element: <Certification />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/join/form",
    element: <AfterCert />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/members",
    element: <Members />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <ThemeProvider theme={theme} />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
