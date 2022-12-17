import { createStore, applyMiddleware, compose } from "redux";
import initialState from "../initialState";
import thunk from "redux-thunk";
import persistingReducer from "../reducers";
import { persistStore } from "redux-persist";

export const configureStore = createStore(
    persistingReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
        : compose(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore); 
