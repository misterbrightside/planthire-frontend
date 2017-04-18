import { getCategoryInfoAsync } from './api';

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

export function setInterestedSubcategories(subcategories) {
  return {
    type: COMPANY_REGISTRATION_SELECTED_SUBCATEGORIES,
    subcategories
  }
}

export function setInterestedServices(services) {
  return {
    type: COMPANY_REGISTRATION_SELECTED_SERVICES,
    services
  }
}