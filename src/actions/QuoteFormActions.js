import { 
  getCategoryInfoAsync,
  getLocationInfoAsync
} from './api';

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
export const SET_LOCATIONS = 'SET_LOCATIONS';

const API_BASE = 'https://murmuring-harbor-78048.herokuapp.com/api';

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

export function setLocations(locations) {
  return {
    type: SET_LOCATIONS,
    locations
  };
}

export function getLocations() {
  return dispatch => {
    return getLocationInfoAsync(dispatch, setLocations);
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

function getNewQuoteFormPayload(state) {
  const { 
    category, county, dateRange,
    email, name, phone, 
    plantName, subcategory, transportMethod
  } = state().QuoteForm;
  return {
    categoryId: category,
    locationId: county,
    startDate: dateRange.startDate.toISOString(),
    endDate: dateRange.endDate.toISOString(),
    email,
    name,
    phone,
    service: plantName,
    subcategoryId: subcategory,
    transportMethod
  };
}

export function submitNewOrderRequest() {
  return (dispatch, getState) => {
    const newQuoteForm = getNewQuoteFormPayload(getState);
    console.log(newQuoteForm);
  }
}