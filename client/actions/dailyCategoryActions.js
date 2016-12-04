import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function createDailyCategory(dailyCategory) {
  return dispatch => {
    return axios.post(`${API_URL}/api/daily_categories`, {daily_category: dailyCategory});
  };
}