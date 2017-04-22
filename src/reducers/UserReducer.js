import { combineReducers } from 'redux';
import { USER_ACTIONS_SET_DETAILS } from '../actions/UserActions';

function loggedIn(state = false, action) {
  switch(action.type) {
    case USER_ACTIONS_SET_DETAILS:
      return true;
    default: 
      return state;
  }
}

function sessionID(state = null, action) {
  switch(action.type) {
    case USER_ACTIONS_SET_DETAILS:
      return action.sessionID;
    default:
      return state;
  }
}

function userType(state = 'VISITOR', action) {
  switch(action.type) {
    case USER_ACTIONS_SET_DETAILS:
      return action.userType.toUpperCase();
    default:
      return state;
  }
}

function user(state = '', action) {
  switch(action.type) {
    case USER_ACTIONS_SET_DETAILS:
      return action.user;
    default:
      return state;
  }
}

function userID(state = -1, action) {
  switch(action.type) {
    case USER_ACTIONS_SET_DETAILS:
      return action.user.id;
    default:
      return state;
  }
}

const User = combineReducers({
  user,
  userType,
  userID,
  loggedIn,
  sessionID
});

export default User;