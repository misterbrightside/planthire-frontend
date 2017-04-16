import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  onButtonClick = event => {
    const { onClickButton } = this.props;
    event.preventDefault();
    return onClickButton();
  }

  render() {
    const { buttonText, size, direction, disabled } = this.props;
    return (
      <div
        className={`Button ${size} ${direction} ${disabled ? 'disabled' : ''}`}
      >
        <button
          onClick={this.onButtonClick}
          disabled={disabled}
        >
          {buttonText}
          <span className={'Button-span'} />
        </button>
      </div>
    );
  }
}

export default Button;
