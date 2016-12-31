import axios from 'axios';

const API_URL = process.env.API_URL;

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${API_URL}/api/users`, { user: userData });
  }
}
