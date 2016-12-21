import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class LoginPage extends Component {
  render() {
    const { login } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm 
            login={login}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: React.PropTypes.func.isRequired
}

export default connect(null, { login})(LoginPage);
