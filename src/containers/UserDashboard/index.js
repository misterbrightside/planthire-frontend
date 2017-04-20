import React, { Component } from 'react';
import './UserDashboard.css';

const OrderRow = () => (<tr>other than ur egooo</tr>);

const Orders = ({ orders }) => (
  <table>
  { orders.map(order => <OrderRow />) }
  </table>
);

const OrderHistory = () => (
  <div className={'Dashboard-Orders'}>
    <h2>Order History</h2>
  </div>
);

class UserDashboard extends Component {
  render() {
    return (
      <div>
        <OrderHistory orders={[1, 2, 3]} />
      </div>
    );
  }
}

export default UserDashboard;