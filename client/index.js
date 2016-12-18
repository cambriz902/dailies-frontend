import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
import { userAccountRequest } from './actions/userActions';
import axios from 'axios';
import routes from './routes';

const store = createStore(
  rootReducer,
  compose(
     applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(userAccountRequest())
    .then((response) => {
      console.log(respopnse.data.user)
      store.dispatch(setCurrentUser(response.data.user));
    })
    .catch(err => {

      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('jwtToken');
    });
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
