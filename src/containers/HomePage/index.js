import React, { Component } from 'react';
import Page from '../../components/Page';
import QuoteForm from '../QuoteForm';
import FeatureTiles from '../FeatureTiles';
import UserTestimonals from '../UserTestimonals';
import About from '../About';
import FAQ from '../FAQ';

class HomePage extends Component {
  render() {
    return (
      <Page>
        <QuoteForm />
        <FeatureTiles />
        <UserTestimonals />
        <About />
        <FAQ />
      </Page>
    );
  }
}

export default HomePage;
