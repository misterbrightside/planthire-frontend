import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import RadioButton from '../../components/RadioButton';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import {
  login
} from '../../actions/UserActions';
import './LoginScreen.css';

class LoginScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userType: 'company'
    };
  }

  setUserType(value) {
    this.setState(prevState => ({
      userType: value
    }));
  }

  setEmail = (value) => {
    this.setState(prevState => ({
      email: value
    }));
  }

  setPassword = (value) => {
    this.setState(prevState => ({
      password: value
    }));
  }

  getRadioGroup() {
    const { userType } = this.state;
    return (
      <div className={'LoginForm-radio-group'}>
        <RadioButton
          value={'company'}
          checked={userType === 'company'}
          labelText={'Company'}
          onClickRadioBox={value => this.setUserType(value)}
        />
        <RadioButton
          value={'user'}
          checked={userType === 'user'}
          labelText={'User'}
          onClickRadioBox={value => this.setUserType(value)}
        />
      </div>
    );
  }

  onClickSubmit = event => {
    const { onLoginAttempt } = this.props;
    const { email, password, userType } = this.state;
    onLoginAttempt(email, password, userType);
  }
 
  render() {
    const { email, password } = this.state;
    return (
      <div className={'LoginScreen'}>
        <h1>Login</h1>
        { this.getRadioGroup() }
        <TextInput
          label={'Email'}
          value={email}
          onChangeValue={this.setEmail}
        />
        <TextInput
          label={'Password'}
          value={password}
          type={'password'}
          onChangeValue={this.setPassword}
        />
        <div className={'LoginScreen-loginButton'}>
          <Button
            buttonText={'Login'}
            size={'small'}
            direction={'right'}
            onClickButton={this.onClickSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginAttempt: (email, password, userType) => dispatch(login(email, password, userType))
  };
}

export default connect(null, mapDispatchToProps)(LoginScreen);