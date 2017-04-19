import React, { Component } from 'react';
import HomePage from '../HomePage';
import CompanyRegistration from '../CompanyRegistration';
import UserDashboard from '../UserDashboard';
import { Router, Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path={'/'} component={HomePage} /> 
        <Route path={'/portal/company/register'} component={CompanyRegistration} />
        <Route path={'/portal/user'} component={UserDashboard} />
      </Router>
    );
  }
}

export default App;
