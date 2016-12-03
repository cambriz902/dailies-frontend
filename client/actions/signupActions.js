import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${API_URL}/api/users`, { user: userData });
  }
}
