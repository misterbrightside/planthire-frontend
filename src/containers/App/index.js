import React, { Component } from 'react';
import HomePage from '../HomePage';
import CompanyRegistration from '../CompanyRegistration';
import { Router, Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={HomePage} /> 
        <Route path={'/companies/register'} component={CompanyRegistration} />
      </Router>
    );
  }
}

export default App;
