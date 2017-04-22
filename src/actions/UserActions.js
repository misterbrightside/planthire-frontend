import { loginRequest, getUser } from './api';
import { push } from 'react-router-redux';
export const USER_ACTIONS_SET_DETAILS = 'USER_ACTIONS_SET_DETAILS';

export function setDetails(userType, user, sessionID) {
  return {
    type: USER_ACTIONS_SET_DETAILS,
    userType, user, sessionID
  }
}

export function login(email, password, userType) {
  return dispatch => {
    return loginRequest(userType, email, password)
      .then(json => dispatch(setDetails(userType, json.user.user, json.sessionID)))
      .then(() => dispatch(push(`/portal/${userType}`)))
      .catch(err => console.log(err));
  };
}

export function getUserData() {
  return (dispatch, getState) => {
    const state = getState().User;
    const { userID, userType } = state;
    console.log(state);
    return userType === 'USER' ? getUser('users', userID) : getUser('companies', userID);
  };
}