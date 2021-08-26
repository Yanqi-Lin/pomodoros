import { createStore } from "redux";
import timerReducer from "./timerReducer";

export const store = createStore(timerReducer);