import React, { Component } from 'react';
import Greetings from './Greetings';
import ActiveCategoryList from './ActiveCategoryList';
import { connect } from 'react-redux';
import { completeDaily } from '../../actions/dailyActions';
import { incrementDailyCategoryTotalPoints } from '../../actions/dailyCategoryActions';

class HomePage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const { dailyCategories, dailies, completeDaily, incrementDailyCategoryTotalPoints } = this.props;
    
    const userContent =  (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h3>Complete A Daily</h3>
          <ActiveCategoryList
            dailyCategories={dailyCategories}
            dailies={dailies}
            completeDaily={completeDaily}
            incrementDailyCategoryTotalPoints={incrementDailyCategoryTotalPoints}
          />
        </div>
      </div>
    );

    const guestContent = ( 
      <Greetings /> 
    );

    return (
      <div>
        { isAuthenticated ? userContent : guestContent }
      </div>
    );
  }
}

HomePage.propTypes = {
  auth: React.PropTypes.object.isRequired,
  dailyCategories: React.PropTypes.array.isRequired,
  dailies: React.PropTypes.array.isRequired,
  completeDaily: React.PropTypes.func.isRequired,
  incrementDailyCategoryTotalPoints: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    dailyCategories: state.dailyCategories,
    dailies: state.dailies
  };
}

export default connect(mapStateToProps, { completeDaily, incrementDailyCategoryTotalPoints })(HomePage);
