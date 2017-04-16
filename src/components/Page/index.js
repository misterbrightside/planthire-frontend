import React, { Component } from 'react';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Page;
