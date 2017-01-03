import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from './Validations';

import setAuthorizationToken from '../../utils/setAuthorizationToken'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login_params: {
        email: '',
        password: ''
      },
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state.login_params);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true});
      this.props.login(this.state.login_params)
        .then((response) => {
          this.initializeStoreData(response.data);
          this.context.router.push('/');
        })
        .catch((error) => {
          this.setState({ 
            isLoading: false, 
            errors: { 
              email: error.response.data.errors,
              password : error.response.data.errors 
            } 
          });
        });
    }
  }

  onChange(event) {
    let updated_params = this.state.login_params;
    updated_params[event.target.name] = event.target.value;
    this.setState({ login_params: updated_params });
  }

  initializeStoreData(data) {
    const token = data.login_user.auth_token;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    this.props.setCurrentUser({email: data.login_user.email });
    this.props.addDailyCategories(data.login_user.daily_categories);
    this.props.addDailies(data.login_user.today_dailies);
  }

  render() {
    const { login_params, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>

        { errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <h1>Login</h1>

        <TextFieldGroup
          field="email"
          label="Email"
          value={this.state.login_params.email}
          error={errors.email}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={login_params.password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired,
  setCurrentUser: React.PropTypes.func.isRequired,
  addDailyCategories: React.PropTypes.func.isRequired,
  addDailies: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginForm;
