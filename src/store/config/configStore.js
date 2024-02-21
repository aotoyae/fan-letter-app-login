import letters from "../modules/letters";
import member from "../modules/member";
import logAuth from "../modules/LogAuth";
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = configureStore(
  { reducer: { letters, member, logAuth } },
  devToolsEnhancer()
);

export default store;
