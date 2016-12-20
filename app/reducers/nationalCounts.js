import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.List( [] );

const nationalCounts = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_NATIONAL':
      return Immutable.List(data);
  }
  return state;
};

export default nationalCounts;
