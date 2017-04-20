import React, { Component } from 'react';
import QuoteForm from '../QuoteForm';
import FeatureTiles from '../FeatureTiles';
import UserTestimonals from '../UserTestimonals';
import About from '../About';
import FAQ from '../FAQ';

class HomePage extends Component {
  render() {
    return (
      <div>
        <QuoteForm />
        <FeatureTiles />
        <UserTestimonals />
        <About />
        <FAQ />
      </div>
    );
  }
}

export default HomePage;
