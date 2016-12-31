import axios from 'axios';
import { ADD_DAILIES, REMOVE_DAILY, SET_DAILIES } from './types';

const API_URL = process.env.API_URL;

export function addDailies(dailies) {
  return {
    type: ADD_DAILIES,
    dailies
  };
}

export function setDailies(dailies) {
  return {
    type: SET_DAILIES,
    dailies
  }
}

export function removeDaily(daily_id) {
  return {
    type: REMOVE_DAILY,
    daily_id
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
