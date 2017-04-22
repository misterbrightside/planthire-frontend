import { loginRequest } from './api';
export const USER_ACTIONS_SET_DETAILS = 'USER_ACTIONS_SET_DETAILS';

export function setDetails(userType, userID, sessionID) {
  return {
    type: USER_ACTIONS_SET_DETAILS,
    userType, userID, sessionID
  }
}

export function login(email, password, userType) {
  return dispatch => {
    return loginRequest(userType, email, password)
      .then(json => dispatch(setDetails(userType, json.user.user, json.sessionID)))
  };
}