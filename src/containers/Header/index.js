import React, { Component } from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={'Header'}>
        <Link to={'/'}>
          <Logo />
          <h1>Plant Hire Ireland</h1>
       </Link>
      </header>
    );
  }
}

export default Header;
