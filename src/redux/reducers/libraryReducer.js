import { ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from '../actions';
import initialState from '../initialState';

const libraryReducer = (state = initialState.library, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default libraryReducer;
