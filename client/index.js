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
      let daily_categories_data = response.data.user.daily_categories;
      let dailies_data = response.data.user.dailies;
      delete(response.data.user['daily_categories']);
      let user_data = response.data.user;
      store.dispatch(addDailyCategories(daily_categories_data));
      store.dispatch(setCurrentUser(user_data));
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
