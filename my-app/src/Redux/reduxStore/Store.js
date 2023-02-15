import { createStore } from "redux";
import myReducer from "../myReducer/myReducer";
const myStore = createStore(myReducer);

export default myStore;
