import React, { Component } from 'react';
import TestimonalsPane from '../../components/TestimonalsPane';
import './UserTestimonals.css';

class UserTestimonals extends Component {
  render() {
    return (
      <div className={'UserTestimonals'}>
        <div className={'UserTestimonals-container'}>
          <h1>What do our users have to say?</h1>
          <TestimonalsPane />
        </div>
      </div>
    );
  }
}

export default UserTestimonals;
