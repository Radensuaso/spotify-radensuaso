import { combineReducers } from "redux";
import mediaReducer from "./mediaReducer";
import libraryReducer from "./libraryReducer";
import { ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from "../actions";

const reducers = combineReducers({
  media: mediaReducer,
  library: libraryReducer,
});

export default reducers;
