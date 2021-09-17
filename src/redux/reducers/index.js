import { combineReducers } from "redux";
import mediaReducer from "./mediaReducer";
import libraryReducer from "./libraryReducer";

const reducers = combineReducers({
  media: mediaReducer,
  library: libraryReducer,
});

export default reducers;
