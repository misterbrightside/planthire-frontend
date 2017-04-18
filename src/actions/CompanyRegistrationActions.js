import {
  getCategoryInfoAsync,
  getLocationInfoAsync,
  getSubcategoryInfoAsync,
  getServicesInfoAsync
} from './api';

import { diffArray } from '../utils/array';

export const COMPANY_REGISTRATION_COMPANY_NAME = 'COMPANY_REGISTRATION_COMPANY_NAME';
export const COMPANY_REGISTRATION_CORRESPONDENCE_NAME = 'COMPANY_REGISTRATION_CORRESPONDENCE_NAME';
export const COMPANY_REGISTRATION_EMAIL = 'COMPANY_REGISTRATION_EMAIL';
export const COMPANY_REGISTRATION_PHONE = 'COMPANY_REGISTRATION_PHONE';
export const COMPANY_REGISTRATION_LOCATION = 'COMPANY_REGISTRATION_LOCATION';
export const COMPANY_REGISTRATION_SELECTED_LOCATIONS = 'COMPANY_REGISTRATION_SELECTED_LOCATIONS';
export const COMPANY_REGISTRATION_SELECTED_CATEGORIES = 'COMPANY_REGISTRATION_SELECTED_CATEGORIES';
export const COMPANY_REGISTRATION_SELECTED_SUBCATEGORIES = 'COMPANY_REGISTRATION_SELECTED_SUBCATEGORIES';
export const COMPANY_REGISTRATION_SELECTED_SERVICES = 'COMPANY_REGISTRATION_SELECTED_SERVICES';
export const COMPANY_REGISTRATION_CATEGORY_VALUES = 'COMPANY_REGISTRATION_CATEGORY_VALUES';
export const COMPANY_REGISTRATION_LOCATION_VALUES = 'COMPANY_REGISTRATION_LOCATION_VALUES';
export const COMPANY_REGISTRATION_SUBCATEGORY_VALUES_APPEND = 'COMPANY_REGISTRATION_SUBCATEGORY_VALUES_APPEND';
export const COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE = 'COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE';
export const COMPANY_REGISTRATION_SERVICES_VALUES_APPEND = 'COMPANY_REGISTRATION_SERVICES_VALUES_APPEND';
export const COMPANY_REGISTRATION_SERVICES_VALUES_REMOVE = 'COMPANY_REGISTRATION_SERVICES_VALUES_REMOVE';

export function getCategories() {
  return dispatch => {
    return getCategoryInfoAsync(dispatch, setCategoriesValues);
  };
}

export function setCategoriesValues(categories) {
  return {
    type: COMPANY_REGISTRATION_CATEGORY_VALUES,
    categories
  }
}

export function getLocations() {
  return dispatch => {
    return getLocationInfoAsync(dispatch, setLocationValues);
  }
}

export function setLocationValues(locations) {
  return {
    type: COMPANY_REGISTRATION_LOCATION_VALUES,
    locations
  }
}

export function setCompanyName(companyName) {
  return {
    type: COMPANY_REGISTRATION_COMPANY_NAME,
    companyName
  };
}

export function setCorrespondenceName(correspondenceName) {
  return {
    type: COMPANY_REGISTRATION_CORRESPONDENCE_NAME,
    correspondenceName
  };
}

export function setEmail(email) {
  return {
    type: COMPANY_REGISTRATION_EMAIL,
    email
  };
}

export function setPhone(phone) {
  return {
    type: COMPANY_REGISTRATION_PHONE,
    phone
  };
}

export function setLocation(location) {
  return {
    type: COMPANY_REGISTRATION_LOCATION,
    location
  }
}

export function setInterestedLocations(locations) {
  return {
    type: COMPANY_REGISTRATION_SELECTED_LOCATIONS,
    locations
  }
}

export function setInterestedCategories(categories) {
  return {
    type: COMPANY_REGISTRATION_SELECTED_CATEGORIES,
    categories
  }
}

export function getSubcategoriesAndSetInterestedCategories(categories) {
  return (dispatch, getState) => {
    const state = getState().CompanyRegistration.selectedCategories;
    const [selectedValue] = diffArray(state, categories);
    if (state.length > categories.length) {
      dispatch(removeSubcategories(selectedValue));
    } else {
      getSubcategoryInfoAsync(selectedValue.value)
       .then(subcategories => dispatch(appendSubcategories(subcategories)));
    }
    dispatch(setInterestedCategories(categories));
  };
}

export function getServicesAndSetInterestedSubcategories(subcategories) {
  return (dispatch, getState) => {
    const state = getState().CompanyRegistration.selectedSubcategories;
    const [selectedValue] = diffArray(state, subcategories);
    if (state.length > subcategories.length) {
      dispatch(removeServices(selectedValue));
    } else {
      getServicesInfoAsync(selectedValue.categoryId, selectedValue.value)
        .then(services => dispatch(appendServices(services)));
    }
    dispatch(setInterestedSubcategories(subcategories));
  }
}

export function appendSubcategories(subcategories) {
  return {
    type: COMPANY_REGISTRATION_SUBCATEGORY_VALUES_APPEND,
    subcategories
  }
}

export function removeSubcategories(category) {
  return {
    type: COMPANY_REGISTRATION_SUBCATEGORY_VALUES_REMOVE,
    category
  }
}

export function setInterestedSubcategories(subcategories) {
  return {
    type: COMPANY_REGISTRATION_SELECTED_SUBCATEGORIES,
    subcategories
  }
}

export function appendServices(services) {
  return {
    type: COMPANY_REGISTRATION_SERVICES_VALUES_APPEND,
    services
  }
}

export function removeServices(subcategory) {
  return {
    type: COMPANY_REGISTRATION_SERVICES_VALUES_REMOVE,
    subcategory
  }
}

export function setInterestedServices(services) {
  return {
    type: COMPANY_REGISTRATION_SELECTED_SERVICES,
    services
  }
}