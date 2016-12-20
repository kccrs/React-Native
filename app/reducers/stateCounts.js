import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = [];

const stateCounts = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_STATE':
      return data;

  }
  return state;
};

export default stateCounts;
