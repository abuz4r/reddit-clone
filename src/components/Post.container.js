import { connect } from 'react-redux';
import { fetchSubReditt, updateSubReditt } from '../actions';
import Post from './Post';

const mapStateToProps = state => ({
  subRedditOption: state.reducer.subRedditOption,
  subReddits: state.reducer.subReddits,
  errorMessage: state.reducer.errorMessage,
  isFetching: state.reducer.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchSubReditt: subreddit => { dispatch(fetchSubReditt(subreddit)); },
  updateSubReditt: subreddit => { dispatch(updateSubReditt(subreddit)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
