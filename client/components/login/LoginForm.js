import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from './Validations';

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
          this.context.router.push('/');
        })
        .catch((error) => {
          this.setState({ isLoading: false })
        });
    }
  }

  onChange(event) {
    let updated_params = this.state.login_params;
    updated_params[event.target.name] = event.target.value;
    this.setState({ login_params: updated_params });
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
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginForm;
