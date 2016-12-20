import { types } from './actionTypes';

export const actionCreators = {
  getStations: (data) => {
    return {type: types.GET_STATIONS, data: data};
  }
};
