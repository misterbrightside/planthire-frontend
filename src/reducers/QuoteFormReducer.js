import { combineReducers } from 'redux';
import {
  SELECT_DATES,
  SET_CATEGORY,
  SET_SUBCATEGORY,
  SET_PLANTNAME,
  SET_COUNTY,
  SET_TRANSPORT_METHOD,
  SET_EMAIL,
  SET_PHONE,
  SET_NAME,
  SET_CATEGORY_DATA,
  SET_SUBCATEGORY_DATA,
  SET_SERVICES_DATA,
  SET_LOCATIONS
} from '../actions/QuoteFormActions';

function dateRange(state = { startDate: null, endDate: null}, action) {
  switch(action.type) {
    case SELECT_DATES:
      return { startDate: action.startDate, endDate: action.endDate };
    default:
      return state;
  }
}

function locations(state = [], action) {
  switch(action.type) {
    case SET_LOCATIONS:
      return action.locations;
    default:
      return state;
  }
}

function categories(state = [], action) {
  switch(action.type) {
    case SET_CATEGORY_DATA:
      return action.categories;
    default:
      return state;
  }
}

function subcategories(state = [], action) {
  switch(action.type) {
    case SET_SUBCATEGORY_DATA:
      return action.subcategories;
    default:
      return state;
  }
}

function services(state = [], action) {
  switch(action.type) {
    case SET_SERVICES_DATA:
      return action.services;
    default:
      return state;
  }
}

function category(state = null, action) {
  switch(action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

function subcategory(state = null, action) {
  switch(action.type) {
    case SET_SUBCATEGORY:
      return action.subcategory;
    default:
      return state;
  }
}

function plantName(state = null, action) {
  switch(action.type) {
    case SET_PLANTNAME:
      return action.plantName;
    default:
      return state;
  }
}

function county(state = null, action) {
  switch(action.type) {
    case SET_COUNTY:
      return action.county;
    default:
      return state;
  }
}

function transportMethod(state = 'collection', action) {
  switch(action.type) {
    case SET_TRANSPORT_METHOD:
      return action.method;
    default: 
      return state;
  }
}

function email(state = '', action) {
  switch(action.type) {
    case SET_EMAIL:
      return action.email;
    default:
      return state;
  }
}

function phone(state = '', action) {
  switch(action.type) {
    case SET_PHONE:
      return action.phone;
    default:
      return state;
  }
}

function name(state = '', action) {
  switch(action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}

const OrderForm = combineReducers({
  dateRange,
  category,
  categories,
  subcategory,
  subcategories,
  plantName,
  services,
  county,
  transportMethod,
  email,
  name,
  phone,
  locations
});

export default OrderForm;
