import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import axios from 'axios';
import routes from './routes';

import { setCurrentUser } from './actions/authActions';
import { userAccountRequest } from './actions/userActions';
import { setDailyCategories } from './actions/dailyCategoryActions';
import { setDailies } from './actions/dailyActions';

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
      initializeStoreData(response.data);
    })
    .catch(err => {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('jwtToken');
    });
}

function initializeStoreData(data) {
  store.dispatch(setCurrentUser({email: data.user.email }));
  store.dispatch(setDailyCategories(data.user.daily_categories));
  store.dispatch(setDailies(data.user.today_dailies));
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
