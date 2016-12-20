import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages'
import auth from './reducers/auth'
import dailyCategories from './reducers/dailyCategories'

export default combineReducers({
  flashMessages,
  auth,
  dailyCategories
});
