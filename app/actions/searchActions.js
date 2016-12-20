import { types } from './actionTypes';

export const actionCreators = {
  getStations: (data) => {
    return {type: types.GET_STATIONS, data: data};
  },

  getNationalStats: (data) => {
    return {type: types.GET_NATIONAL, data: data};
  },

  getStateStats: (data) => {
    return {type: types.GET_STATE, data: data};
  }

};
