import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Action } from "./actions";


const initialState = {
  productions: [],
  isWaiting: false,
}
  

const reducer = (state, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case Action.LoadedProductions:
      return {
        ...state,
        productions: action.payload,
      };
    case Action.StartedWaiting:
      return {
        ...state,
        isWaiting: true,
      };
    case Action.StoppedWaiting:
      return {
        ...state,
        isWaiting: false,
      };
    case Action.AddProduction:
      // console.log("current state");
      // console.log(state.productions);
      // console.log("payload being added");
      // console.log(action.payload);
      return {
        ...state,
        productions: [action.payload, ...state.productions],
      };


    case Action.RemoveProduction:
        return {
          ...state,
          productions: state.productions.filter(production => production.id !== action.payload),
        };
    default:
      return state;
  }
  //return initialState;
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
