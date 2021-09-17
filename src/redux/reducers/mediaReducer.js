import {
  ERROR,
  FILL_CHILLOUT,
  FILL_CLASSICAL,
  FILL_ROCK,
  FILL_SEARCH,
  LOADING,
  SELECT,
} from '../actions';
import initialState from '../initialState';

const mediaReducer = (state = initialState.media, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mediaReducer;
