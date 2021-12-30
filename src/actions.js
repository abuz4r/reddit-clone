export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const UPDATE_SUBREDDIT = 'UPDATE_SUBREDDIT';

const fetchRequest = () => ({
  type: FETCH_REQUEST
})
const fetchError = (message) => ({
  type: FETCH_ERROR,
  message
});

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  data
});

export const updateSubReditt = (subReddit) => ({
  type: UPDATE_SUBREDDIT,
  subReddit,
})

export const fetchSubReditt = (subreddit) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch("https://www.reddit.com/r/" + subreddit + ".json")
    .then((res) => {
      if (res.status !== 200) {
        dispatch(fetchError('Something went wrong while fetching subreddit'));
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          dispatch(fetchSuccess(data.data.children));
        }
      });
    })
    .catch((err) => {
      dispatch(fetchError(err.message));
    });
  }
};
