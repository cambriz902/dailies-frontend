import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from './validations'
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_params: {
        email: '',
        password: '',
        password_confirmation: '',
        time_zone: ''
      },
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    let updated_params = this.state.user_params
    updated_params[event.target.name] = event.target.value
    this.setState({ user_params: updated_params })
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.userSignupRequest(this.state.user_params)
        .then((response) => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You Signed up Successfully. Welcome!'
          });
          this.context.router.push('/');
        })
        .catch((error) => {
          this.setState({ isLoading: false })
        });
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state.user_params);
    
    if (!isValid) {
      this.setState({ errors: errors });
    }

    return isValid;
  }

  render() {
    const { errors } = this.state;
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community</h1>

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.user_params.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.user_params.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.password_confirmation}
          label="Password Comfirmation"
          onChange={this.onChange}
          value={this.state.user_params.password_confirmation}
          field="password_confirmation"
          type="password"
        />

        <div className={classnames("form-group", { 'has-error': errors.time_zone })}>
          <label className="control-label">Timezone</label>
          <select
            value={this.state.user_params.time_zone}
            onChange={this.onChange}
            type="text"
            name="time_zone"
            className="form-control"
          >
            <option value="" disabled>Choose Your Timezone </option>
            {options}
          </select>
          {errors.time_zone && <span className="help-block">{errors.time_zone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div> 
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm;
