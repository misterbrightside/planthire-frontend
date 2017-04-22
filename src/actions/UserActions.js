import { loginRequest, getUser, getOrders } from './api';
import { push } from 'react-router-redux';

export const USER_ACTIONS_SET_DETAILS = 'USER_ACTIONS_SET_DETAILS';
export const USER_ACTIONS_SET_ORDERS = 'USER_ACTIONS_SET_ORDERS';

export function setDetails(userType, user, sessionID) {
  return {
    type: USER_ACTIONS_SET_DETAILS,
    userType, user, sessionID
  }
}

export function setOrderData(orders) {
  return {
    type: USER_ACTIONS_SET_ORDERS,
    orders
  }
}

export function login(email, password, userType) {
  return dispatch => {
    return loginRequest(userType, email, password)
      .then(json => {
        const user = json.user.user || json.user.company;
        dispatch(setDetails(userType, user, json.sessionID))
      })
      .then(() => dispatch(push(`/portal/${userType}`)))
      .catch(err => console.log(err));
  };
}

export function getUserData() {
  return (dispatch, getState) => {
    const { userID } = getState().User;
    getUser('users', userID)
      .then(user => {
        dispatch(setOrderData(user.orders));
      })
  };
}

export function getCompanyData() {
  return (dispatch, getState) => {
    const { userID } = getState().User;
    getUser('companies', userID)
      .then(company => console.log(company));
  };
}

export function getOpenOrders() {
  return (dispatch, getState) => {
    const { userID } = getState().User;
    getOrders(userID);
  };
}