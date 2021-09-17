import initialState from "../initialState";
import { FILL_SONGS, SELECT, LOADING, ERROR } from "../actions";

const libraryReducer = (state = initialState.library, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default libraryReducer;
