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
    const { getLoginState } = this.props;
    return (
      <Router history={this.props.history}>
        <Route path={'/'} component={Page}>
          <IndexRoute component={HomePage} />
          <Route path={'/portal'} component={getLoginState()}>

          </Route>
        </Route>
        {/*<Route path={'/portal/'}>
          <Route path={'/company/register'} component={CompanyRegistration} />
          <Route path={'/user'} component={UserDashboard} />
        </Route>*/}
      </Router>
    );
  }
}

const getLoginState = (user) => {
  switch(user.userType) {
    case 'VISITOR':
      return LoginScreen;
    case 'USER':
      return UserDashboard;
    default:
      return CompanyRegistration;
  }
}

const mapStateToProps = (state) => {
  const { User } = state;
  return {
    getLoginState: () => getLoginState(User)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
