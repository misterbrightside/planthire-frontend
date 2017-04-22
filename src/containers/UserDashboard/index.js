import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../actions/UserActions';
import './UserDashboard.css';
import Orders from './Orders';
import 'fixed-data-table/dist/fixed-data-table.css';

const OrderHistory = ({ orders }) => (
  <div className={'Dashboard-Orders'}>
    <Orders orders={orders} />
  </div>
);

class UserDashboard extends Component {

  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }

  render() {
    const { orders } = this.props;
    return (
      <div>
        <div className={'UserDashboard-Header'}>
          <h2>Order History</h2>
        </div>
        {orders.length ? <OrderHistory orders={orders} /> : null}
        <div>
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => {
  const { orders } = state.UserDashboard;
  return {
    orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(getUserData())
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(UserDashboard);