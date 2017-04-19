import QuoteForm from './QuoteFormReducer';
import CompanyRegistration from './CompanyRegistrationReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  QuoteForm,
  CompanyRegistration,
  routing: routerReducer
});

const getStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default getStore;