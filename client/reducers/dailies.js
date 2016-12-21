import { ADD_DAILIES } from '../actions/types';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_DAILIES:
      return state.concat(action.dailies);
    default: return state;
  }
}
