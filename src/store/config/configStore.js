import letters from "../modules/letters";
import member from "../modules/member";
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = configureStore(
  { reducer: { letters, member } },
  devToolsEnhancer()
);

export default store;
