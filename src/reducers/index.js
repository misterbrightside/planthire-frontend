import QuoteForm from './QuoteFormReducer';
import CompanyRegistration from './CompanyRegistrationReducer';
import User from './UserReducer';
import UserDashboard from './UserDashboardReducer';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  QuoteForm,
  CompanyRegistration,
  User,
  UserDashboard,
  routing: routerReducer
});

const middleware = routerMiddleware(browserHistory);
const getStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk, middleware),
      autoRehydrate()
    )
  );
  return store;
}

export default getStore;