import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducers = combineReducers({
  reducer,
  'ab': {}
});
  
const reducers = (state, action) => {
  return rootReducers(state, action);
};
  
export default reducers;