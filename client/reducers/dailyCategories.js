import { ADD_DAILY_CATEGORIES } from '../actions/types';
import { INCREMENT_TOTAL_POINTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_DAILY_CATEGORIES:
      return state.concat(action.daily_categories);
    case INCREMENT_TOTAL_POINTS:
      return state.map(category => {
        if (category.id == action.daily_category_id)
          return { 
            id: category.id, 
            kind: category.kind,
            total_points: (category.total_points + 1)
          };
        else {
          return category;
        }
      });
    default: return state;
  }
}
