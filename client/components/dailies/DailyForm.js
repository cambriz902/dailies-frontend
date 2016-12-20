import React, { Component } from 'react';
import validateInput from './Validations';
import TextFieldGroup from '../common/TextFieldGroup';
import classnames from 'classnames';

class DailyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daily_params: {
        title: '',
        description: '',
        daily_category_id: ''
      },
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    let updated_params = this.state.daily_params;
    updated_params[event.target.name] = event.target.value;
    this.setState({ daily_params: updated_params });
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.isValid()) {
      this.setState({ errros: {}, isLoading: true });
      this.props.createDaily(this.state.daily_params)
        .then((response) => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Create Daily Successfully!'
          });
          this.context.router.push('/');
        })
        .catch(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state.daily_params);

    if(!isValid) {
      this.setState({ errors: errors });
    }
    
    return isValid;
  }

  render() {
    const { daily_params, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Daily</h1>
        <TextFieldGroup
          label="Title"
          field="title"
          value={daily_params.title}
          onChange={this.onChange}
          errors={errors.title}
          />

        <TextFieldGroup
          label="Description"
          field="description"
          value={daily_params.description}
          onChange={this.onChange}
          errors={errors.description}
          />

        <div className={classnames("form-group", { 'has-error': errors.daily_category_id })}>
          <label className="control-lable">Daily Category</label>
          <select
            value={daily_params.daily_category_id}
            onChange={this.onChange}
            type="text"
            name="daily_category_id"
            className="form-control"
          >
            <option value="" disabled>Choose Daily Category</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>Create</button>
      </form>
    );
  }
}

DailyForm.propTypes = {
  createDaily: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

DailyForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default DailyForm;
