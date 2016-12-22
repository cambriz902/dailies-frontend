import React, { Component } from 'react';
import Greetings from './Greetings';
import ActiveCategories from './ActiveCategories';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const { dailyCategories } = this.props;

    const userContent =  (
      <ActiveCategories 
        dailyCategories={dailyCategories} 
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
    dailyCategories: state.dailyCategories
  };
}

export default connect(mapStateToProps, {})(HomePage);
