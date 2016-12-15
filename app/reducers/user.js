import * as types from '../actions/actionTypes';

const initialState = [];

const user = (action, state = initialState) => {
  const { user } = state;
  const { type, data } = action;

  switch (type) {
    case 'GET_USER':
      return {
        ...state,
        user: data
      }
  }

  return state;
}

export default user;
