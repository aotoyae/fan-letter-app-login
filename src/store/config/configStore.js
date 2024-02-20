import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import letters from "../modules/letters";
import member from "../modules/member";

const rootReducer = combineReducers({ letters, member });
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
