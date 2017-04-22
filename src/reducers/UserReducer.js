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

function userID(state = '', action) {
  switch(action.type) {
    case USER_ACTIONS_SET_DETAILS:
      return action.userID;
    default:
      return state;
  }
}

const user = combineReducers({
  userID,
  userType,
  loggedIn,
  sessionID
});

export default user;