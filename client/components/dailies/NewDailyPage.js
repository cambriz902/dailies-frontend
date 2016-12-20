import React, { Component} from 'react';
import DailyForm from './DailyForm';
import { connect } from 'react-redux';
import { createDaily } from '../../actions/dailyActions';
import { addFlashMessage } from '../../actions/flashMessages';


class NewDailyPage extends Component {
  render() {
    return (
      <div>
        <DailyForm 
          createDaily={createDaily}
          addFlashMessage={addFlashMessage}
        />
      </div>
    );
  }
}

NewDailyPage.propTypes = {
  createDaily: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { createDaily, addFlashMessage })(NewDailyPage);
