import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDailyCategory } from '../../actions/dailyCategoryActions';
import TextFieldGroup from '../common/TextFieldGroup';


class DailyCategoryFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kind: '',
      errors: {},
      isLoading: false
    };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.createDailyCategory(this.state);
  }

  render() {
    const { kind, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Daily Category</h1>

        <TextFieldGroup
          label="Type"
          field="kind"
          value={kind}
          onChange={this.onChange}
          error={errors.kind}
        />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

DailyCategoryFrom.propTypes = {
  createDailyCategory: React.PropTypes.func.isRequired
}

export default connect(null, { createDailyCategory })(DailyCategoryFrom);
