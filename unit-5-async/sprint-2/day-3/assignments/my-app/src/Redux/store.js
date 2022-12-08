import {legacy_createStore , applyMiddleware, combineReducers} from "redux" 
import Todoreducer from "./AppReducer/Todoreducer"
import AuthReducer from "./AuthReducer/AuthReducer"
import thunk from "redux-thunk" 

const rootReducer = combineReducers({Todoreducer,AuthReducer})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))