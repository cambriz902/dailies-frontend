import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { setDailyCategories } from '../actions/dailyCategoryActions';
import { setDailies } from '../actions/dailyActions';

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.props.setDailyCategories([]);
    this.props.setDailies([]);
  }

  render () {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/new-daily-category-page">Categories</Link></li>
        <li><Link to="/new-daily-page">Dailies</Link></li>
        <li><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="#">Home</Link>
          </div>

          <div >
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
  setDailyCategories: React.PropTypes.func.isRequired,
  setDailies: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout, setDailyCategories, setDailies })(NavigationBar);
