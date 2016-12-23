import React, { Component } from 'react';
import Greetings from './Greetings';
import ActiveCategoryList from './ActiveCategoryList';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const { dailyCategories, dailies } = this.props;

    const userContent =  (
      <ActiveCategoryList
        dailyCategories={dailyCategories}
        dailies={dailies}
      />
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
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    dailyCategories: state.dailyCategories,
    dailies: state.dailies
  };
}

export default connect(mapStateToProps, {})(HomePage);
