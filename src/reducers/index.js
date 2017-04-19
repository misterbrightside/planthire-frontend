import QuoteForm from './QuoteFormReducer';
import CompanyRegistration from './CompanyRegistrationReducer';
import User from './UserReducer';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  QuoteForm,
  CompanyRegistration,
  User,
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
  persistStore(store, { whitelist: ['User' ]});
  return store;
}

export default getStore;