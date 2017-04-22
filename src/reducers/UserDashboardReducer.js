import { combineReducers } from 'redux';
import { USER_ACTIONS_SET_ORDERS } from '../actions/UserActions';

function orders(state = [], action) {
  switch(action.type) {
    case USER_ACTIONS_SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}

const UserDashboard = combineReducers({
  orders
});

export default UserDashboard;