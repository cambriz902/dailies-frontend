import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if(Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  } else if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  } else if(data.password.length < 6) {
    errors.password = 'is too short (minimum is 6 characters)';
  }
  if(Validator.isEmpty(data.password_confirmation)) {
    errors.password_confirmation = 'This field is required';
  } else if(!Validator.equals(data.password, data.password_confirmation)) {
    errors.password_confirmation = 'Passwords must match';
  }
  if(Validator.isEmpty(data.time_zone)) {
    errors.time_zone = 'This field is required';
  }

  return  {
    errors,
    isValid: isEmpty(errors)
  }
}
