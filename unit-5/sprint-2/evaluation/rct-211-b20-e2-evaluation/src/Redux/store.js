// NOTE: use this store variable to create a store.

import {applyMiddleware, legacy_createStore}  from  "redux"
import thunk from "redux-thunk"

import { reducer  } from "./AppReducer/reducer";

// const combine = combineReducers({AppReducer})
const store = legacy_createStore(reducer ,applyMiddleware(thunk))

export { store };




// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
