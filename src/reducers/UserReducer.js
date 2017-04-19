import { combineReducers } from 'redux';

function loggedIn(state = false, action) {
  switch(action.type) {
    default: 
      return state;
  }
}

function userType(state = 'VISITOR', action) {
  switch(action.type) {
    default:
      return state;
  }
}

const user = combineReducers({
  userType,
  loggedIn
});

export default user;