import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../actions/UserActions';
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

  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }

  render() {
    return (
      <div>
        <OrderHistory orders={[1, 2, 3]} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(getUserData())
  };
};

export default connect(null, mapDispatchToProps)(UserDashboard);