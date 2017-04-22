import {
  COMPANY_REGISTRATION_EMAIL_ALREADY_EXISTS,
  COMPANY_REGISTRATION_NETWORK_TIMED_OUT,
  COMPANY_REGISTRATION_UNKNOWN_ERROR
} from './CompanyRegistrationActions';

const API_BASE = 'http://localhost:8081/api';

export function getLocationInfoAsync(dispatch, nextAction) {
  return fetch(`${API_BASE}/locations`)
    .then(res => res.json())
    .then(json => json.map(location => ({ value: location.id, label: location.county })))
    .then(locations => dispatch(nextAction(locations)));
}

export function getCategoryInfoAsync(dispatch, nextAction) {
  return fetch(`${API_BASE}/categories?nested=false`)
    .then(res => res.json())
    .then(json => json.map(category => ({ value: category.id, label: category.category })))
    .then(categories => dispatch(nextAction(categories)));
}

export function getSubcategoryInfoAsync(categoryId) {
  return fetch(`${API_BASE}/categories/${categoryId}`)
    .then(res => res.json())
    .then(json => json.subcategories.map(subcategory => ({ 
      value: subcategory.id,
      label: subcategory.subcategory,
      categoryId: subcategory.categoryId
    })));
}

export function getServicesInfoAsync(categoryId, subcategoryId) {
  return fetch(`${API_BASE}/categories/${categoryId}/subcategories/${subcategoryId}`)
    .then(res => res.json())
    .then(json => json.services.map(service => ({
      value: service.id,
      label: service.service,
      subcategoryId: service.subcategoryId,
      categoryId: json.categoryId
    })));
}

function checkForErrorsOnCompanyPost({ status, json}) {
  switch(status) {
    case 200:
      return json;
    case 409:
      throw new Error(COMPANY_REGISTRATION_EMAIL_ALREADY_EXISTS);
    case 504:
      throw new Error(COMPANY_REGISTRATION_NETWORK_TIMED_OUT);
    case (status >= 400 && status < 600):
      throw new Error(COMPANY_REGISTRATION_UNKNOWN_ERROR);
    default:
      return json;
  }
}

export function postNewCompany(company) {
  return fetch(`${API_BASE}/companies`, { 
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(company)
  })
  .then(res => {
    return new Promise((resolve, reject) => {
      res.json().then(json => resolve({ status: res.status, json }));
    });
  })
  .then(checkForErrorsOnCompanyPost);
}

export function postNewQuote(form) {
  return fetch(`${API_BASE}/orders`, { 
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(form)
  });
}

export function loginRequest(type, email, password) {
  return fetch(`${API_BASE}/sessions/${type}`, {
    method: 'post',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
}

export function getUser(userType, userId) {
  return fetch(`${API_BASE}/${userType}/${userId}`, { credentials: 'include' })
    .then(res => res.json());
}

export function getOrders(userId) {
  return fetch(`${API_BASE}/companies/${userId}/orders`);
}