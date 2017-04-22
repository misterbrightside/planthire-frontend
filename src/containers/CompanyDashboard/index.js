import React, { Component } from 'react';
import { getOpenOrders } from '../../actions/UserActions';
import { connect } from 'react-redux';

class CompanyDashboard extends Component {
  componentDidMount() {
    const { getOrders } = this.props;
    getOrders();
  }

  render() {
    return (
      <div>
        <div className={'UserDashboard-Header'}>
          <h2>Orders</h2>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOpenOrders())
  };
};

export default connect(null, mapDispatchToProps)(CompanyDashboard);
