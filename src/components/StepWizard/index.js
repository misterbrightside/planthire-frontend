import React, { Component } from 'react';
import Button from '../Button';

const FirstStep = ({ step, visible, onClickNextStep, complete }) => {
  return visible ? (
    <div className={'Step'}>
      <div>{step}</div>
      <div className={'QuoteForm-ButtonGroup firstStep'}>
        <Button
          buttonText={'Next'}
          disabled={!complete}
          onClickButton={onClickNextStep}
          size={'small'}
          direction={'right'}
        />
      </div>
    </div>
  ) : null;
};

const LastStep = ({ step, onClickBackStep, visible, complete, submitButtonText, onClickSubmit }) => {
  return visible ? (
    <div className={'Step'}>
      <div>{step}</div>
      <div className={'QuoteForm-ButtonGroup'}>
        <Button
          buttonText={'Back'}
          size={'small'}
          onClickButton={onClickBackStep}
          direction={'left'}
        />
        <Button
          buttonText={submitButtonText}
          direction={'right'}
          disabled={!complete}
          onClickButton={onClickSubmit}
        />
      </div>
    </div>
  ) : null;
};

const Step = ({ step, onClickNextStep, onClickBackStep, visible, complete }) => {
  return visible ? (
    <div className={'Step'}>
      <div>{step}</div>
      <div className={'QuoteForm-ButtonGroup'}>
        <Button
          buttonText={'Back'}
          size={'small'}
          onClickButton={onClickBackStep}
          direction={'left'}
        />
        <Button
          buttonText={'Next'}
          size={'small'}
          disabled={!complete}
          onClickButton={onClickNextStep}
          direction={'right'}
        />
      </div>
    </div>
  ) : null;
};

class Steps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    }
  }

  onClickNextStep = () => {
    return this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  }

  onClickBackStep = () => {
    return this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  }

  render() {
    const {
      steps, completedSteps, submitButtonText, onClickSubmit
    } = this.props;
    const { activeStep } = this.state;
    const firstStep = steps[0];
    const rest = steps.slice(1, steps.length - 1);
    const lastStep = steps[steps.length - 1];

    return (
      <div className={'Steps'}>
        <FirstStep
          key={`step-0`}
          step={firstStep}
          complete={completedSteps[0]}
          visible={activeStep === 0}
          onClickNextStep={this.onClickNextStep}
        />
        { rest.map((step, index) => (
          <Step
            step={step}
            visible={activeStep === index + 1}
            key={`step-${index + 1}`}
            complete={completedSteps[index + 1]}
            onClickNextStep={this.onClickNextStep}
            onClickBackStep={this.onClickBackStep}
          />
        ))}
        <LastStep
          step={lastStep}
          key={`step-${steps.length - 1}`}
          visible={activeStep === steps.length - 1}
          complete={completedSteps[steps.length - 1]}
          onClickBackStep={this.onClickBackStep}
          submitButtonText={submitButtonText}
          onClickSubmit={onClickSubmit}
        />
      </div>
    );
  }
}

export default Steps;