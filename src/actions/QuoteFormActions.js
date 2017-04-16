export const SELECT_DATES = 'SELECT_DATES';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SUBCATEGORY = 'SET_SUBCATEGORY';
export const SET_PLANTNAME = 'SET_PLANTNAME';
export const SET_COUNTY = 'SET_COUNTY';
export const SET_TRANSPORT_METHOD = 'SET_TRANSPORT_METHOD';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PHONE = 'SET_PHONE';
export const SET_NAME = 'SET_NAME';

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

export function setSubcategory(subcategory) {
  return {
    type: SET_SUBCATEGORY,
    subcategory
  }
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