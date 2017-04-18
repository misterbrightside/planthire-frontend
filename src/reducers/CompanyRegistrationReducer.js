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
  COMPANY_REGISTRATION_SELECTED_SERVICES,
  COMPANY_REGISTRATION_CATEGORY_VALUES,
  COMPANY_REGISTRATION_LOCATION_VALUES,
  COMPANY_REGISTRATION_SUBCATEGORY_VALUES_APPEND,
  COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE
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

function categoryValues(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_CATEGORY_VALUES:
      return action.categories;
    default:
      return state;
  }
}

function subcategoryValues(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_SUBCATEGORY_VALUES_APPEND:
      return state.concat(action.subcategories).sort((a, b) => a.value < b.value);
    case COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE:
      return state.filter(subcategory => subcategory.categoryId !== action.category.value);
    default:
      return state;
  }
}

function locationValues(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_LOCATION_VALUES:
      return action.locations;
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
    case COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE:
      return state.filter(subcategory => subcategory.categoryId !== action.category.value);
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
  subcategoryValues,
  email,
  phone,
  location,
  selectedLocations,
  selectedCategories,
  selectedSubcategories,
  selectedServices,
  categoryValues,
  locationValues
});

export default companyRegistration;