import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_CURRENT_USER } from './types';

const API_URL = 'http://localhost:3000';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function login(data) {
  return dispatch => {
    return axios.post(`${API_URL}/api/sessions`, { session: data })
      .then((response) => {
        const token = response.data.user.auth_token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser({email: response.data.user.email }));
      });
  }
}
