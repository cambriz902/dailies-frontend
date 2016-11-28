import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function login(data) {
  return dispatch => {
    return axios.post(`${API_URL}/api/sessions`, { session: data });
  }
}
