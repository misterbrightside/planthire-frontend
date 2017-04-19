import React, { Component } from 'react';
import HomePage from '../HomePage';
import CompanyRegistration from '../CompanyRegistration';
import { Router, Route, browserHistory } from 'react-router'


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Route path={'/'} component={HomePage} />
          <Route path={'/companies/register'} component={CompanyRegistration} />
        </div>
      </Router>
    );
  }
}

export default App;
