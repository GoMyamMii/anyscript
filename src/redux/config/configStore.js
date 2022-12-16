import { createStore } from "redux";
import { combineReducers } from "redux";
import todoList from "../modules/todoList";

// modules 모음
const rootReducer = combineReducers({ todoList });
const store = createStore(rootReducer);

export default store;
