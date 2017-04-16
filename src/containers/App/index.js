import React, { Component } from 'react';
import HomePage from '../HomePage';
import CompanyRegistration from '../CompanyRegistration';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/company/register'} component={CompanyRegistration} />
        </div>
      </Router>
    );
  }
}

export default App;
