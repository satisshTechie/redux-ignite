import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import HomeReducer from "./HomeReducer";

export const rootReducer = () => {
  combineReducers({
    gameReducer: gameReducer,
    HomeReducer: HomeReducer,
  });
};
