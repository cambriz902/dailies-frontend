import axios from 'axios';
import { ADD_DAILY_CATEGORIES, SET_DAILY_CATEGORIES } from './types';
import { INCREMENT_TOTAL_POINTS } from './types';

const API_URL = process.env.API_URL;

export function addDailyCategories(daily_categories) {
  return {
    type: ADD_DAILY_CATEGORIES,
    daily_categories
  };
}

export function setDailyCategories(daily_categories) {
  return {
    type: SET_DAILY_CATEGORIES,
    daily_categories
  }
}

export function incrementDailyCategoryTotalPoints(daily_category_id) {
  return {
    type: INCREMENT_TOTAL_POINTS,
    daily_category_id
  }
}

export function createDailyCategory(daily_category) {
  return dispatch => {
    return axios.post(`${API_URL}/api/daily_categories`, { daily_category: daily_category });
  }
}
