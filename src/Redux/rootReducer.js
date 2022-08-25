import { combineReducers } from "redux";
import productReducer from "./ReducerProduct/ReducerProduct";


const rootReducer = combineReducers({shop : productReducer})
export default rootReducer;