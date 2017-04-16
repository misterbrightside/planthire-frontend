import React, { Component } from 'react';
import './JumboHeader.css';

class JumboHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="JumboHeader">
        <h1>{text}</h1>
      </div>
    );
  }
}

export default JumboHeader;
