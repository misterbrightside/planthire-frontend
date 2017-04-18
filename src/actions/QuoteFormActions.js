import { getCategoryInfoAsync } from './api';

export const SELECT_DATES = 'SELECT_DATES';
export const SET_CATEGORY_DATA = 'SET_CATEGORY_DATA';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SUBCATEGORY = 'SET_SUBCATEGORY';
export const SET_SUBCATEGORY_DATA = 'SET_SUBCATEGORY_DATA';
export const SET_PLANTNAME = 'SET_PLANTNAME';
export const SET_SERVICES_DATA = 'SET_SERVICES_DATA';
export const SET_COUNTY = 'SET_COUNTY';
export const SET_TRANSPORT_METHOD = 'SET_TRANSPORT_METHOD';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PHONE = 'SET_PHONE';
export const SET_NAME = 'SET_NAME';

const API_BASE = 'http://localhost:8081/api';

export function getCategories() {
  return dispatch => {
    return getCategoryInfoAsync(dispatch, setCategories);
  };
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORY_DATA,
    categories
  }
}

export function setSubcategories(subcategories) {
  return {
    type: SET_SUBCATEGORY_DATA,
    subcategories
  }
}

export function setServices(services) {
  return {
    type: SET_SERVICES_DATA,
    services
  }
}

export function selectDates(startDate, endDate) {
  return {
    type: SELECT_DATES,
    startDate, endDate
  }
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category
  }
}

export function setCategoryAndFetchSubcategoryInfo(id) {
  return dispatch => {
    dispatch(setCategory(id));
    return fetch(`${API_BASE}/categories/${id}`)
      .then(res => res.json())
      .then(json => {
        const subcategories = json.subcategories.map(subcategory => ({ value: subcategory.id, label: subcategory.subcategory }));
        dispatch(setSubcategories(subcategories));
        dispatch(setSubcategory(null));
        dispatch(setPlantName(null));
      });
  };
}

export function setSubcategory(subcategory) {
  return {
    type: SET_SUBCATEGORY,
    subcategory
  }
}

export function setSubcategoryAndFetchServiceInfo(subcategoryId) {
  return (dispatch, getState) => {
    const categoryId = getState().QuoteForm.category;
    dispatch(setSubcategory(subcategoryId));
    return fetch(`${API_BASE}/categories/${categoryId}/subcategories/${subcategoryId}`)
      .then(res => res.json())
      .then(json => {
        const services = json.services.map(service => ({ value: service.id, label: service.service }));
        dispatch(setServices(services));
        dispatch(setPlantName(null));        
      });
  };
}

export function setPlantName(plantName) {
  return {
    type: SET_PLANTNAME,
    plantName
  }
}

export function setCounty(county) {
  return {
    type: SET_COUNTY,
    county
  }
}

export function setTransportMode(method) {
  return {
    type: SET_TRANSPORT_METHOD,
    method
  }
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email
  }
}

export function setName(name) {
  return {
    type: SET_NAME,
    name
  }
}

export function setPhone(phone) {
  return {
    type: SET_PHONE,
    phone
  }
}