import React, { Component } from 'react';
import './QuestionBox.css';

const ExpandIcon = () => (
   <div
    className={'QuestionBox-expand-icon expand'}
  />
);

const HideIcon = () => (
  <div
    className={'QuestionBox-expand-icon hide'}
  />
);

class QuestionBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onClickIcon = () => (
    this.setState(prevState => ({
      open: !prevState.open
    }))
  )

  render() {
    const { open } = this.state;
    const { text, question } = this.props;
    return (
      <div className="QuestionBox">
        <div className={'QuestionBox-header'} onClick={this.onClickIcon}>
          <div className={'QuestionBox-question'}>{question}</div>
          { open ? <HideIcon /> : <ExpandIcon />}
        </div>
        { open ? <div className={'QuestionBox-text'}>{text}</div> : null }
      </div>
    );
  }
}

export default QuestionBox;
