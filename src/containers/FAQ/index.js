import React, { Component } from 'react';
import QuestionBox from '../../components/QuestionBox';
import './FAQ.css';

class FAQ extends Component {
  render() {
    return (
      <div className="FAQ">
        <h2>Frequently Asked Questions</h2>
        <QuestionBox
          text={'Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
          question={'How do I get a quote?'}
        />
        <QuestionBox
          text={'Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
          question={'How long do I have to wait for a quote?'}
        />
        <QuestionBox
          text={'Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
          question={'How long do I have to wait for a quote?'}
        />
      </div>
    );
  }
}

export default FAQ;
