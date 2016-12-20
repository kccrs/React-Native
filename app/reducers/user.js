import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = {};

const user = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_USER':
      return data;
  }

  return state;
};

export default user;
