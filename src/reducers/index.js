import QuoteForm from './QuoteFormReducer';
import CompanyRegistration from './CompanyRegistrationReducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  QuoteForm,
  CompanyRegistration
});

const getStore = () => createStore(rootReducer);

export default getStore;