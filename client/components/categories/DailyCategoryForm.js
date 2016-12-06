import React, { Component } from 'react';
import validateInput from './validations';
import TextFieldGroup from '../common/TextFieldGroup';


class DailyCategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daily_category_params: {
        kind: ''
      },
      errors: {},
      isLoading: false
    };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    let updated_params = this.state.daily_category_params;
    updated_params[event.target.name] = event.target.value;
    this.setState({ daily_category_params: updated_params });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    if(this.isValid()) {
      this.props.createDailyCategory(this.state.daily_category_params)
        .then((response) => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Created Daily Category Successfully!'
          });
        })
        .catch((data) => {
          this.setState({ isLoading: false });
        })
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state.daily_category_params);

    if (!isValid) {
      this.setState({ errors: errors });
    }

    return isValid;
  }

  render() {
    const { daily_category_params, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Daily Category</h1>

        <TextFieldGroup
          label="Type"
          field="kind"
          value={daily_category_params.kind}
          onChange={this.onChange}
          error={errors.kind}
        />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

DailyCategoryForm.propTypes = {
  createDailyCategory: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

DailyCategoryForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default DailyCategoryForm;
