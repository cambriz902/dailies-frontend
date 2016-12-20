import axios from 'axios';
import { ADD_DAILY_CATEGORIES } from './types';

const API_URL = 'http://localhost:3000';

export function addDailyCategories(daily_categories) {
  return {
    type: ADD_DAILY_CATEGORIES,
    daily_categories
  };
}

export function createDailyCategory(dailyCategory) {
  return dispatch => {
    return axios.post(`${API_URL}/api/daily_categories`, { daily_category: dailyCategory });
  }
}
