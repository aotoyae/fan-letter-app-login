import letters from "../modules/letters";
import member from "../modules/member";
import authLogin from "../modules/authLogin";
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = configureStore(
  { reducer: { letters, member, authLogin } },
  devToolsEnhancer()
);

const getStore = () => store;

export default getStore;
