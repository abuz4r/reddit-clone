import { connect } from 'react-redux';
import { updateSubReditt } from '../actions';
import Subreddit from './Subreddit';

const mapStateToProps = state => ({
//   subRedditOption: state.reducer.subRedditOption,
});

const mapDispatchToProps = dispatch => ({
  updateSubReditt: subreddit => { dispatch(updateSubReditt(subreddit)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
