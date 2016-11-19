import axios from 'axios';

const URL = 'http://localhost:3000'
export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${URL}/api/users`, userData);
  }
}
