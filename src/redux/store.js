import { createStore, applyMiddleware } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import userReducers from "./rootReducer";

const middleWare = [reduxThunk];


if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const store = createStore(userReducers, applyMiddleware(...middleWare));
// const store = configureStore({
//     userReducers: userReducers,
//     selection: selectionReducer,
//     todos: todosReducer,
//     router: connectRouter(history)
//   })

export default store;