import {getLocalData ,saveData } from "../utils/localStorage"



const initialState = {
  count: getLocalData("reduxCount") || 1
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      const newAddCount = state.count + action.payload
      saveData("reduxCount" ,newAddCount )
      return {

        ...state,
        count: newAddCount
      };
    case "REMOVE":
      const newReduceCount = state.count - action.payload
      saveData("reduxCount" , newReduceCount)
      return {
        ...state,
        count:newReduceCount
      };
    default:
      return state;
  }
}
