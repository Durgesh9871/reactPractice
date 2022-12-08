import {legacy_createStore , applyMiddleware , combineReducers} from  "redux" 
import { Appreducer } from "./AppData/reducer"
import { AuthDataReducer } from "./AuthData/reducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers({Appreducer ,AuthDataReducer})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk)) 

