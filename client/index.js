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
import { addDailyCategories } from './actions/dailyCategoryActions';
import { addDailies } from './actions/dailyActions';

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
  store.dispatch(addDailyCategories(data.user.daily_categories));
  store.dispatch(addDailies(data.user.dailies));
  delete(data.user['daily_categories']);
  delete(data.user['dailies']);
  store.dispatch(setCurrentUser(data.user));
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
