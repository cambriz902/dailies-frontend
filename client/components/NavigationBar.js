import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render () {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/home" className="navbar-brand" href="#">Home</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/new-daily-category-page">Create Category</Link></li>
            <li><Link to="/new-daily-page">Create Daily</Link></li>
            <li><a href="#" onClick={this.logout}>Logout</a></li>
          </ul>
        </div>
      </div>
    );

    const guestLinks = (
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/#" className="navbar-brand" href="#">Home</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    );

    return (
      <nav className="navbar navbar-default">
        { isAuthenticated ? userLinks : guestLinks }
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
