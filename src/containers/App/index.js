import React, { Component } from 'react';
import HomePage from '../HomePage';
import Page from '../../components/Page';
import CompanyRegistration from '../CompanyRegistration';
import UserDashboard from '../UserDashboard';
import LoginScreen from '../LoginScreen';
import { Router, Route, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path={'/'} component={Page}>
          <IndexRoute component={HomePage} />
          <Route path={'/portal/login'} component={LoginScreen} />
          <Route path={'/company/register'} component={CompanyRegistration} />
          <Route path={'/portal/user'} component={UserDashboard} />
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
