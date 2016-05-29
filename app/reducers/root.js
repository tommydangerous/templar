import { combineReducers } from 'redux';

// Reducers
import posts from './posts';
import todos from './todos';

export default combineReducers({
  posts,
  todos,
});
