import {
  FETCH_REQUEST,
  FETCH_ERROR,
  FETCH_SUCCESS,
  UPDATE_SUBREDDIT
} from './actions';

const initialState = {
  subReddits: [],
  subRedditOption: 'all',
  errorMessage: '',
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ERROR:
      return {
        ...state,
        errorMessage: action.message,
        isFetching: initialState.isFetching
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        subReddits: action.data,
        errorMessage: initialState.errorMessage,
        isFetching: initialState.isFetching
      };

    case UPDATE_SUBREDDIT:
        return {
          ...state,
          subRedditOption: action.subReddit
        }

    default:
      return state;
  }
};

export default reducer;
