import axios from 'axios';
import { ADD_DAILIES } from './types';

const API_URL = 'http://localhost:3000';

export function addDailies(dailies) {
  return {
    type: ADD_DAILIES,
    dailies
  };
}

export function createDaily(daily) {
  return dispatch => {
    return axios.post(`${API_URL}/api/dailies`, { daily: daily });
  }
}

export function completeDaily(dailyId) {
  return dispatch => {
    return axios.put(`${API_URL}/api/dailies/${dailyId}/complete`);
  }
}
