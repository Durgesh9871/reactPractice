import { reducer } from "./reducer";
import { legacy_createStore } from "redux";

// const initialState = {
//   count: 1
// };
export const store = legacy_createStore(reducer);
