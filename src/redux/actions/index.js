export const FILL_SEARCH = 'FILL_SEARCH';
export const FILL_CLASSICAL = 'FILL_CLASSICAL';
export const FILL_CHILLOUT = 'FILL_CHILLOUT';
export const FILL_ROCK = 'FILL_ROCK';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SELECT = 'SELECT';
export const ADD_TO_LIBRARY = 'ADD_TO_LIBRARY';
export const REMOVE_FROM_LIBRARY = 'REMOVE_FROM_LIBRARY';

export const fetchSongsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      const response = await fetch(process.env.REACT_APP_BE_URL + query, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjY0Mzk4MTksImV4cCI6MTYyNzY0OTQxOX0.r_G81mw3I9g934aGyIO8AZbfkWxO_W7hS9Tlz9lYZNY',
        },
      });
      if (response.ok) {
        const fetchedContent = await response.json();
        switch (query) {
          case 'Rock Music':
            dispatch({
              type: FILL_ROCK,
              payload: fetchedContent,
            });
            break;
          case 'Classical':
            dispatch({
              type: FILL_CLASSICAL,
              payload: fetchedContent,
            });
            break;
          case 'Chill Out':
            dispatch({
              type: FILL_CHILLOUT,
              payload: fetchedContent,
            });
            break;

          default:
            dispatch({
              type: FILL_SEARCH,
              payload: fetchedContent,
            });
            break;
        }

        dispatch({
          type: ERROR,
          payload: false,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR,
          payload: true,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: true,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};
