import React, { Component } from 'react';
import './TextWithImage.css';

class TextWithImage extends Component {

  getSvg() {
    const { imageSrc, viewBoxSize } = this.props;
    return (
      <svg viewBox={viewBoxSize} className={`TextWithImage-image`}>
        <use xlinkHref={imageSrc} />
      </svg>
    );
  }

  render() {
    const { headerText, text, directionOfImage } = this.props; 
    return (
      <div className={`TextWithImage ${directionOfImage}`}>
        <h2 className={'TextWithImage-header'}>{headerText}</h2>
        { this.getSvg() }
        <div className={`TextWithImage-text`}>{text}</div>
      </div>
    );
  }
}

export default TextWithImage;