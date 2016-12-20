import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = [];

const stations = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_STATIONS':
      return data;
  }
  return state;
};

export default stations;
