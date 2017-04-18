import React, { Component } from 'react';
import DropdownSelect from '../../components/DropdownSelect';
import TextInput from '../../components/TextInput';
import RadioButton from '../../components/RadioButton';
import Steps from '../../components/StepWizard';
import './QuoteForm.css';

import { connect } from 'react-redux';
import {
  selectDates,
  setCategoryAndFetchSubcategoryInfo,
  setSubcategoryAndFetchServiceInfo,
  setPlantName,
  setCounty,
  setTransportMode,
  setEmail,
  setName,
  setPhone,
  getCategories,
  submitNewOrderRequest,
  getLocations
} from '../../actions/QuoteFormActions';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './DatePickerOverrides.scss';

class QuoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    }
  }

  componentDidMount() {
    const { getCategoryInfo, getLocations } = this.props;
    getCategoryInfo();
    getLocations();
  }

  getRadioGroup() {
    const { onSetTransportMethod, transportMethod } = this.props;
    return (
      <div className={'OrderForm-radio-group'}>
        <RadioButton
          value={'delivery'}
          checked={transportMethod === 'delivery'}
          labelText={'Delivery'}
          onClickRadioBox={onSetTransportMethod}
        />
        <RadioButton
          value={'collection'}
          checked={transportMethod === 'collection'}
          labelText={'Collection'}
          onClickRadioBox={onSetTransportMethod}
        />
      </div>
    );
  }

  getSteps() {
    const { 
      onSetCategory, onSetSubcategory, onSetPlantname,
      category, subcategory, plantName,
      categories, subcategories, services
    } = this.props;
    const step1 = (
      <div className={'StepContainer'}>
        <DropdownSelect
          labelText={'What are you looking for?'}
          listId={'lookingFor'}
          options={categories}
          onSelect={onSetCategory}
          value={category}
        />
        <DropdownSelect
          labelText={'Subcategory'}
          listId={'requiredFor'}
          options={subcategories}
          value={subcategory}
          onSelect={onSetSubcategory}
        />
        <DropdownSelect
          labelText={'Plant name/service'}
          listId={'requiredFor'}
          options={services}
          value={plantName}
          onSelect={onSetPlantname}
        />
      </div>
    );

    const { 
      startDate, endDate, onDateSelect,
      onSetCounty, county, locations
    } = this.props;
    const step2 = (
      <div className={'StepContainer'}>
        <DropdownSelect
          labelText={'Where do you need it?'}
          listId={'requiredFor'}
          value={county}
          onSelect={onSetCounty}
          options={locations}
        />
        <div className={'DateRangePickerContainer'}>
          <DateRangePicker
            numberOfMonths={1}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={onDateSelect}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
        </div>
        { this.getRadioGroup() }
      </div>
    );

    const {
      email, phone, name,
      onSetEmail, onSetPhone, onSetName
    } = this.props;
    const step3 = (
      <div className={'StepContainer'}>
        <TextInput
          label={'Email'}
          value={email}
          onChangeValue={onSetEmail}
        />
        <TextInput
          label={'Phone'}
          value={phone}
          onChangeValue={onSetPhone}
        />
        <TextInput
          label={'Name'}
          value={name}
          onChangeValue={onSetName}
        />
      </div>
    );

    return [step1, step2, step3];
  }

  render() {
    const steps = this.getSteps();
    const {
      activeStep, onClickNextStep, onClickBackStep,
      stepOneValid, stepTwoValid, stepThreeValid,
      onSubmitForm
     } = this.props;
    return (
      <form className={'QuoteForm'}>
        <Steps
          steps={steps}
          completedSteps={[stepOneValid, stepTwoValid, stepThreeValid]}
          onClickBackStep={onClickBackStep}
          onClickNextStep={onClickNextStep}
          activeStep={activeStep}
          submitButtonText={'Get me a quote'}
          onClickSubmit={onSubmitForm}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { 
    activeStep, category, subcategory, 
    plantName, county, transportMethod,
    dateRange, email, phone, name,
    categories, subcategories, services,
    locations
  } = state.QuoteForm;

  return {
    activeStep: activeStep,
    stepOneValid: category && subcategory && plantName,
    stepTwoValid: dateRange.startDate && dateRange.endDate && county,
    stepThreeValid: email && phone && name,
    category,
    categories,
    subcategory,
    subcategories,
    plantName,
    services,
    county,
    locations,
    transportMethod,
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    email,
    phone,
    name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => dispatch(getLocations()),
    getCategoryInfo: () => dispatch(getCategories()),
    onDateSelect: ({ startDate, endDate }) => dispatch(selectDates(startDate, endDate)),
    onSetCategory: ({ value }) => dispatch(setCategoryAndFetchSubcategoryInfo(value)),
    onSetSubcategory: ({ value }) => dispatch(setSubcategoryAndFetchServiceInfo(value)),
    onSetPlantname: ({ value }) => dispatch(setPlantName(value)),
    onSetCounty: ({ value }) => dispatch(setCounty(value)),
    onSetTransportMethod: value => dispatch(setTransportMode(value)),
    onSetEmail: value => dispatch(setEmail(value)),
    onSetPhone: value => dispatch(setPhone(value)),
    onSetName: value => dispatch(setName(value)),
    onSubmitForm: () => dispatch(submitNewOrderRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
