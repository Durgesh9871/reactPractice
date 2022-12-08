import {legacy_createStore , applyMiddleware , compose} from "redux" ;
import reducer from "./reducer";
import thunk from "redux-thunk"

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = legacy_createStore(reducer, composeEnchancer(applyMiddleware(thunk)))

export {store}
