import axios from 'axios';

const API_URL = process.env.API_URL;

export function userAccountRequest() {
  return dispatch => {
    return axios.get(`${API_URL}/api/users/authenticated_user`);
  }
}
