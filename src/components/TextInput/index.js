import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  render() {
    const { label, onChangeValue, type, value } = this.props;
    return (
      <div className={'TextInput'}>
        <label>{label}</label>
        <input
          type={ type ? type : 'text'}
          onChange={event => onChangeValue(event.target.value)}
          value={value}
        />
      </div>
    );
  }
}

export default TextInput;
