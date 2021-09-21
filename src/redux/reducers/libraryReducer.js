import { ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from '../actions';
import initialState from '../initialState';

const libraryReducer = (state = initialState.library, action) => {
  switch (action.type) {
    case ADD_TO_LIBRARY : 
    return {
      ...state,
      libraryList: [
        ...state.libraryList,
        action.payload
      ]
    }
    case REMOVE_FROM_LIBRARY :
      return {
        ...state,
        libraryList: 
          state.libraryList.filter(
            (l) => l.id !== action.payload.id 
          )
        // Replacing state as an Array from filter
      }
    default:
      return state;
  }
};

export default libraryReducer;
