import React, { Component } from 'react';
import './RadioButton.css';

class RadioButton extends Component {
  render() {
    const { value, onClickRadioBox, checked, labelText } = this.props;
    return (
      <div className={`RadioButton ${checked ? 'selected' : ''}`} onClick={() => onClickRadioBox(value)}>
        <input
          className={'RadioButton-input'}
          type={'radio'}
          name={'hi'}
          value={value}
          checked={checked}
          onChange={() => onClickRadioBox(value)}
        />
        <label htmlFor={value}><span />{labelText}</label>
      </div>
    );
  }
}

export default RadioButton;
