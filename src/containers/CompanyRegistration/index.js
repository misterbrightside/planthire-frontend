import React, { Component } from 'react';
import Page from '../../components/Page';
import TextInput from '../../components/TextInput';
import DropdownSelect from '../../components/DropdownSelect';
import COUNTIES from '../QuoteForm/counties';
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
  setInterestedServices
} from '../../actions/CompanyRegistrationActions';
import './CompanyRegistration.css';

class CompanyRegistration extends Component {

  getSteps() {
    const {
      companyName, correspondenceName, email, 
      phone, location, onChangeCompany, 
      onChangeCorrespondenceName, onChangeEmail, onChangePhone,
      onChangeLocation
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
          options={COUNTIES}
          value={location}
          onSelect={onChangeLocation}
        />
      </div>
    );

    const { 
      selectedLocations, selectedCategories, selectedSubcategories, 
      selectedServices, onChangeSelectedLocations, onChangeSelectedCategories,
      onChangeSelectedSubcategories, onChangeSelectedServices
    } = this.props;
    const step2 = (
      <div>
        <DropdownSelect
          labelText={'Locations'}
          options={COUNTIES}
          multi={true}
          value={selectedLocations}
          onSelect={onChangeSelectedLocations}
        />
        <DropdownSelect
          labelText={'Hire Categories'}
          options={COUNTIES}
          multi={true}
          value={selectedCategories}
          onSelect={onChangeSelectedCategories}
        />
        <DropdownSelect
          labelText={'Subcategories'}
          options={COUNTIES}
          multi={true}
          value={selectedSubcategories}
          onSelect={onChangeSelectedSubcategories}
        />
        <DropdownSelect
          labelText={'Plant name / Services'}
          options={COUNTIES}
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
    selectedCategories, selectedSubcategories, selectedServices 
  } = state.CompanyRegistration;
  return {
    stepOneValid: !!(companyName && correspondenceName && email && phone && location),
    stepTwoValid: !!(selectedCategories.length && selectedLocations.length && selectedServices.length && selectedSubcategories.length),
    companyName,
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
