import { combineReducers } from 'redux';
import user from './user';
import stations from './stations';
import nationalCounts from './nationalCounts';

const reducers = combineReducers({
  stations,
  nationalCounts,
  user
});

export default reducers;
