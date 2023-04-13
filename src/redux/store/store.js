import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import loginReducer from "../slice/loginSlice";
import cmtReducer from "../slice/cmtSlice";
import cateReducer from "../slice/cateSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  version: 1,
};

// slice들 모으는 역할
const rootReducer = combineReducers({
  loginState: loginReducer,
  cmtState: cmtReducer,
  cateState: cateReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
