import React, { Component} from 'react';
import DailyForm from './DailyForm';
import { connect } from 'react-redux';
import { createDaily } from '../../actions/dailyActions';
import { addFlashMessage } from '../../actions/flashMessages';


class NewDailyPage extends Component {
  render() {
    const { createDaily, addFlashMessage, dailyCategories } = this.props;
    return (
      <div>
        <DailyForm 
          createDaily={createDaily}
          addFlashMessage={addFlashMessage}
          dailyCategories={dailyCategories}
        />
      </div>
    );
  }
}

NewDailyPage.propTypes = {
  createDaily: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  dailyCategories: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    dailyCategories: state.dailyCategories
  }
}

export default connect(mapStateToProps, { createDaily, addFlashMessage })(NewDailyPage);
