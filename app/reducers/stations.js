import * as types from '../actions/actionTypes';


const initialState = Immutable.List( [] );

const stations = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_STATIONS':
      return data;
  }
  return state;
};

export default stations;
