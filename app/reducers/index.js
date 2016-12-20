import { combineReducers } from 'redux';
import user from './user';
import stations from './stations';

const reducers = combineReducers({
  stations,
  user
});

export default reducers;
