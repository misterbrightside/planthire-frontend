import React, { Component } from 'react';
import HomePage from '../HomePage';
import Page from '../../components/Page';
import CompanyRegistration from '../CompanyRegistration';
import UserDashboard from '../UserDashboard';
import LoginScreen from '../LoginScreen';
import { Router, Route, IndexRoute } from 'react-router';
import { persistStore } from 'redux-persist';
import { Provider, connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false
    };
  }

  componentWillMount() {
    const { store } = this.props;
    persistStore(store, { whitelist: ['User'] }, () => {
      this.setState(prevState => ({ rehydrated: true }));
    });
  }

  render() {
    const { rehydrated } = this.state;
    const { store } = this.props;
    return !rehydrated ? <div>Loading...</div> : (
      <Provider store={store}>
        <Router history={this.props.history}>
          <Route path={'/'} component={Page}>
            <IndexRoute component={HomePage} />
            <Route path={'/portal/login'} component={LoginScreen} />
            <Route path={'/company/register'} component={CompanyRegistration} />
            <Route path={'/portal/user'} component={UserDashboard} />
          </Route>
        </Router>
      </Provider>
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
