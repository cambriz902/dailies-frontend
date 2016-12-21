import React, { Component } from 'react';
import DailyCategoryForm from './DailyCategoryForm'
import { connect } from 'react-redux';
import { createDailyCategory } from '../../actions/dailyCategoryActions';
import { addFlashMessage } from '../../actions/flashMessages';
import { addDailyCategories } from '../../actions/dailyCategoryActions';

class NewDailyCategoryPage extends Component {
  render () {
    const { createDailyCategory, addFlashMessage, addDailyCategories } = this.props;
    return (
      <div>
        <DailyCategoryForm 
          createDailyCategory={createDailyCategory}
          addFlashMessage={addFlashMessage} 
          addDailyCategories={addDailyCategories}
        />
      </div>
    );
  }
} 

NewDailyCategoryPage.propTypes =  {
  createDailyCategory: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  addDailyCategories: React.PropTypes.func.isRequired
}

export default connect(null, { createDailyCategory, addFlashMessage, addDailyCategories })(NewDailyCategoryPage);
