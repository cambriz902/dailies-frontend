import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';

import { login } from '../../actions/authActions';
import { setCurrentUser } from '../../actions/authActions';
import { addDailyCategories } from '../../actions/dailyCategoryActions';
import { addDailies } from '../../actions/dailyActions';

class LoginPage extends Component {
  render() {
    const { login, setCurrentUser, addDailies, addDailyCategories } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm 
            login={login}
            setCurrentUser={setCurrentUser}
            addDailyCategories={addDailyCategories}
            addDailies={addDailies}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: React.PropTypes.func.isRequired,
  setCurrentUser: React.PropTypes.func.isRequired,
  addDailyCategories: React.PropTypes.func.isRequired,
  addDailies: React.PropTypes.func.isRequired
}

export default connect(null, { login, setCurrentUser, addDailyCategories, addDailies })(LoginPage);
