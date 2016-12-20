import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  
  if(Validator.isEmpty(data.daily_category_id)) {
    errors.daily_category_id = 'This field is required';
  }
  if(Validator.isEmpty(data.title)) {
    errors.title = 'This field is required';
  }
  if(Validator.isEmpty(data.description)) {
    errors.description = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}