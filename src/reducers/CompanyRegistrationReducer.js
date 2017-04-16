import { combineReducers } from 'redux';
import {
  COMPANY_REGISTRATION_COMPANY_NAME,
  COMPANY_REGISTRATION_CORRESPONDENCE_NAME,
  COMPANY_REGISTRATION_EMAIL,
  COMPANY_REGISTRATION_PHONE,
  COMPANY_REGISTRATION_LOCATION,
  COMPANY_REGISTRATION_SELECTED_LOCATIONS,
  COMPANY_REGISTRATION_SELECTED_CATEGORIES,
  COMPANY_REGISTRATION_SELECTED_SUBCATEGORIES,
  COMPANY_REGISTRATION_SELECTED_SERVICES
} from '../actions/CompanyRegistrationActions';

function companyName(state = '', action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_COMPANY_NAME:
      return action.companyName;
    default:
      return state;
  }
}

function correspondenceName(state = '', action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_CORRESPONDENCE_NAME:
      return action.correspondenceName;
    default:
      return state;
  }
}

function email(state = '', action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_EMAIL:
      return action.email;
    default:
      return state;
  }
}

function phone(state = '', action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_PHONE:
      return action.phone;
    default:
      return state;
  }
}

function location(state = '', action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_LOCATION:
      return action.location;
    default:
      return state;
  }
}

function selectedLocations(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_SELECTED_LOCATIONS:
      return action.locations;
    default:
      return state;
  }
}

function selectedCategories(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_SELECTED_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function selectedSubcategories(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_SELECTED_SUBCATEGORIES:
      return action.subcategories;
    default:
      return state;
  }
}

function selectedServices(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_SELECTED_SERVICES:
      return action.services;
    default:
      return state;
  }
}

const companyRegistration = combineReducers({
  companyName,
  correspondenceName,
  email,
  phone,
  location,
  selectedLocations,
  selectedCategories,
  selectedSubcategories,
  selectedServices
});

export default companyRegistration;