import { combineReducers } from "redux";
import { registration } from "./auth.reducer";

const rootReducer = combineReducers({
    registration,
});

export default rootReducer;
