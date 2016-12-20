import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.List( [] );

const user = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_USER':
      return Immutable.List(data);
  }

  return state;
};

export default user;
