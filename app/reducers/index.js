import { combineReducers } from 'redux';
import user from './user';
import stations from './stations';
import nationalCounts from './nationalCounts';
import stateCounts from './stateCounts';

const reducers = combineReducers({
  stations,
  stateCounts,
  nationalCounts,
  user
});

export default reducers;
