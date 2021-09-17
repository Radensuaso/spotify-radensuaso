import { createStore, applyMiddleware, compose } from "redux";
import initialState from "../initialState";
import thunk from "redux-thunk";
import reducers from "../reducers";

const configureStore = createStore(
  reducers,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
