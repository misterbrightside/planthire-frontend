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
  COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE,
  COMPANY_REGISTRATION_SERVICES_VALUES_APPEND,
  COMPANY_REGISTRATION_SERVICES_VALUES_REMOVE,
  COMPANY_REGISTRATION_EMAIL_ALREADY_EXISTS,
  COMPANY_REGISTRATION_NETWORK_TIMED_OUT,
  COMPANY_REGISTRATION_UNKNOWN_ERROR,
  COMPANY_REGISTRATION_CLEAR_ERROR,
  COMPANY_REGISTRATION_DISMISS_ERROR
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

function serviceValues(state = [], action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_SERVICES_VALUES_APPEND:
      return state.concat(action.services).sort((a, b) => a.value < b.value);
    case COMPANY_REGISTRATION_SERVICES_VALUES_REMOVE:
      return state.filter(service => service.subcategoryId !== action.subcategory.value);
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
    case COMPANY_REGISTRATION_SERVICES_VALUES_REMOVE:
      return state.filter(service => service.subcategoryId !== action.subcategory.value);
    case COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE:
      return state.filter(service => service.categoryId !== action.category.value);
    default:
      return state;
  }
}

function error(state = { message: '', canSubmitForm: true }, action) {
  switch(action.type) {
    case COMPANY_REGISTRATION_EMAIL_ALREADY_EXISTS:
      return { message: 'The email selected already exists.', canSubmitForm: false };
    case COMPANY_REGISTRATION_DISMISS_ERROR:
      return { message: '', canSubmitForm: state.canSubmitForm };
    case COMPANY_REGISTRATION_NETWORK_TIMED_OUT:
      return { message: 'The network timed out trying to complete registration.', canSubmitForm: true };
    case COMPANY_REGISTRATION_UNKNOWN_ERROR:
      return { message: 'Something happened, please try again.', canSubmitForm: true };
    case COMPANY_REGISTRATION_CLEAR_ERROR:
      return { message: '', canSubmitForm: true };
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
  locationValues,
  serviceValues,
  error
});

export default companyRegistration;