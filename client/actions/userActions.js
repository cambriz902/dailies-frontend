import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function userAccountRequest() {
  return dispatch => {
    return axios.get(`${API_URL}/api/users/1`);
  }
}