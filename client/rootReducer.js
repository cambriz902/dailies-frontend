import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import dailyCategories from './reducers/dailyCategories';
import dailies from './reducers/dailies';

export default combineReducers({
  flashMessages,
  auth,
  dailyCategories,
  dailies
});
