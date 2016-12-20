import { ADD_DAILY_CATEGORIES } from '../actions/types'

const initialState = [];

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_DAILY_CATEGORIES:
      return [
        ...state,
        action.daily_categories
      ];
    default: return state;
  }
}
