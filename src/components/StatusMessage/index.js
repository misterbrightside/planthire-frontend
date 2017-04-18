import React, { Component } from 'react';
import './StatusMessage.css';

class StatusMessage extends Component {
  render() {
    const { message, type, onDismiss } = this.props;
    return (
      <div className={`StatusMessage ${type}`}>
        <div className={'StatusMessage-message'}>
          {message}
        </div>
        <div 
          onClick={onDismiss}
          className={'StatusMessage-dismissButton'}
        >
          𝘅
        </div>
      </div>
    );
  }
}

export default StatusMessage;
