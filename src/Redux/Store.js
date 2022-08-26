import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const { createStore, applyMiddleware, compose } = require("redux");
const store = createStore(rootReducer,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
export default store ;
