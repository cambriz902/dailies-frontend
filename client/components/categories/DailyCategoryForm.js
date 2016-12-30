import React, { Component } from 'react';
import validateInput from './Validations';
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
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createDailyCategory(this.state.daily_category_params)
        .then((response) => {
          this.props.addDailyCategories([response.data.daily_category]);
          this.props.addFlashMessage({
            type: 'success',
            text: 'Created Daily Category Successfully!'
          });
          this.context.router.push('/');
        })
        .catch(() => {
          this.setState({ isLoading: false });
        });
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
        <h1>Create Daily Category</h1>

        <TextFieldGroup
          label="Kind"
          field="kind"
          value={daily_category_params.kind}
          onChange={this.onChange}
          error={errors.kind}
        />

        <button type="submit" className="btn btn-primary" disabled={isLoading}>Create</button>
      </form>
    );
  }
}

DailyCategoryForm.propTypes = {
  createDailyCategory: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  addDailyCategories: React.PropTypes.func.isRequired
}

DailyCategoryForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default DailyCategoryForm;
