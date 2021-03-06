import { ADD_DAILIES, REMOVE_DAILY, SET_DAILIES } from '../actions/types';
import _ from 'lodash';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_DAILIES:
      return state.concat(action.dailies);
    case REMOVE_DAILY:
      return state.filter(daily => {
        return daily.id != action.daily_id
      });
    case SET_DAILIES:
      return action.dailies;
    default: return state;
  }
}
