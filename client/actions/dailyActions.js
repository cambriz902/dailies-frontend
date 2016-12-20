import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function createDaily(daily) {
  return dispatch => {
    return axios.post(`${API_URL}/api/dailies`, { daily: daily });
  }
}
