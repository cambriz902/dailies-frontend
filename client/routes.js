import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignupPage from './components/signup/SignupPage'
import LoginPage from './components/login/LoginPage';
import NewDailyCategoryPage from './components/categories/NewDailyCategoryPage';
import NewDailyPage from './components/dailies/NewDailyPage';
import HomePage from './components/home/HomePage';

import requireAuth from './utils/requireAuth';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="new-daily-category-page" component={requireAuth(NewDailyCategoryPage)} />
    <Route path="new-daily-page" component={requireAuth(NewDailyPage)} />
  </Route>
)
