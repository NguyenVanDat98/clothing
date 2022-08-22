import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "../Reducer/Reducer";
   const composeEnhancer = composeWithDevTools()
const { createStore } = require("redux");


const store = createStore(Reducer,composeEnhancer)
export default store ;