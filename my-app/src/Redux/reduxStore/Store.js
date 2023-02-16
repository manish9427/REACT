import { applyMiddleware, createStore } from "redux";
import myReducer from "../myReducer/myReducer";
import logger from "redux-logger";
const myStore = createStore(myReducer, applyMiddleware(logger));

export default myStore;
