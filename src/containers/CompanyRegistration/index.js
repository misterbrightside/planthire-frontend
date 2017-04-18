import React, { Component } from 'react';
import Page from '../../components/Page';
import TextInput from '../../components/TextInput';
import DropdownSelect from '../../components/DropdownSelect';
import Steps from '../../components/StepWizard';
import { connect } from 'react-redux';
import {
  setCompanyName,
  setCorrespondenceName,
  setEmail,
  setPhone,
  setLocation,
  setInterestedLocations,
  setInterestedCategories,
  setInterestedSubcategories,
  setInterestedServices,
  getCategories,
  getLocations
} from '../../actions/CompanyRegistrationActions';
import './CompanyRegistration.css';

class CompanyRegistration extends Component {

  componentDidMount() {
    const { getCategories, getLocations } = this.props;
    getCategories();
    getLocations();
  }

  getSteps() {
    const {
      companyName, correspondenceName, email, 
      phone, location, onChangeCompany, 
      onChangeCorrespondenceName, onChangeEmail, onChangePhone,
      onChangeLocation, locationValues
    } = this.props;
    const step1 = (
      <div>
        <TextInput
          label={'Company Name'}
          value={companyName}
          onChangeValue={onChangeCompany}
        />
        <TextInput
          label={'Correspondence Name'}
          value={correspondenceName}
          onChangeValue={onChangeCorrespondenceName}
        />
        <TextInput
          label={'Email'}
          value={email}
          onChangeValue={onChangeEmail}
        />
        <TextInput
          label={'Phone'}
          value={phone}
          onChangeValue={onChangePhone}
        />
        <DropdownSelect
          labelText={'Location'}
          options={locationValues}
          value={location}
          onSelect={onChangeLocation}
        />
      </div>
    );

    const { 
      selectedLocations, selectedCategories, selectedSubcategories, 
      selectedServices, onChangeSelectedLocations, onChangeSelectedCategories,
      onChangeSelectedSubcategories, onChangeSelectedServices, categoryValues
    } = this.props;
    const step2 = (
      <div>
        <DropdownSelect
          labelText={'Locations'}
          options={locationValues}
          multi={true}
          value={selectedLocations}
          onSelect={onChangeSelectedLocations}
        />
        <DropdownSelect
          labelText={'Hire Categories'}
          options={categoryValues}
          multi={true}
          value={selectedCategories}
          onSelect={onChangeSelectedCategories}
        />
        <DropdownSelect
          labelText={'Subcategories'}
          options={[]}
          multi={true}
          value={selectedSubcategories}
          onSelect={onChangeSelectedSubcategories}
        />
        <DropdownSelect
          labelText={'Plant name / Services'}
          options={[]}
          multi={true}
          value={selectedServices}
          onSelect={onChangeSelectedServices}
        />
      </div>
    );

    return [step1, step2];
  }

  render() {
    const { stepOneValid, stepTwoValid } = this.props;
    return (
      <Page>
        <div className={'CompanyRegistration'}>
          <Steps
            steps={this.getSteps()}
            completedSteps={[stepOneValid, stepTwoValid]}
            submitButtonText={'Submit Details'}
            activeStep={0}
          />
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  const {
    companyName, correspondenceName, email,
    phone, location, selectedLocations, 
    selectedCategories, selectedSubcategories, selectedServices,
    categoryValues, locationValues
  } = state.CompanyRegistration;
  return {
    stepOneValid: !!(companyName && correspondenceName && email && phone && location),
    stepTwoValid: !!(selectedCategories.length && selectedLocations.length && selectedServices.length && selectedSubcategories.length),
    companyName,
    categoryValues,
    locationValues,
    correspondenceName,
    email,
    phone,
    location,
    selectedLocations,
    selectedCategories,
    selectedSubcategories,
    selectedServices
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getLocations: () => dispatch(getLocations()),
    getCategories: () => dispatch(getCategories()),
    onChangeCompany: value => dispatch(setCompanyName(value)),
    onChangeCorrespondenceName: value => dispatch(setCorrespondenceName(value)),
    onChangeEmail: value => dispatch(setEmail(value)),
    onChangePhone: value => dispatch(setPhone(value)),
    onChangeLocation: ({ value }) => dispatch(setLocation(value)),
    onChangeSelectedLocations: values => dispatch(setInterestedLocations(values)),
    onChangeSelectedCategories: values => dispatch(setInterestedCategories(values)),
    onChangeSelectedSubcategories: values => dispatch(setInterestedSubcategories(values)),
    onChangeSelectedServices: values => dispatch(setInterestedServices(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyRegistration);
