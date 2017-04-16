import React, { Component } from 'react';
import './Footer.css';

const ContactUs = () => (
  <div className={'FooterSection ContactUs'}>
    <h3>Contact Us</h3>
    <address>
      <div>Plant Hire Ireland,</div>
      <div>Knockbridge,</div>
      <div>Dundalk,</div>
      <div>Co. Louth</div>
    </address>
    <a href={'tel:+353862333829'}>+353 (0) 86 233 3829</a>
    <a href={'mailto:info@planthireireland.ie'}>info@planthireireland.ie</a>
  </div>
);

const InformationLinks = () => (
   <div className={'FooterSection InformationLinks'}>
    <h3>Information</h3>
    <a href="">About us</a>
    <a href="">How it works</a>
    <a href="">FAQs</a>
    <a href="">Suppliers</a>
    <a href="">Support</a>
    <a href="">Terms & Conditions</a>
    <a href="">Privacy Policy</a>
  </div> 
);

const SuppliersLinks = () => (
   <div className={'FooterSection InformationLinks'}>
    <h3>Suppliers</h3>
    <a href="">Register as a supplier</a>
    <a href="">Login into dashboard</a>
    <a href="">My account</a>
    <a href="">FAQs</a>
    <a href="">Support</a>
  </div> 
);


class Footer extends Component {
  render() {
    return (
      <footer className={'Footer'}>
        <div className='arrow-background 1' />
        <div className={'Footer-links'}>
          <ContactUs />
          <InformationLinks />
          <SuppliersLinks />
        </div>
        <div className={'Footer-subfooter'}>
          <div>Copyright © 2017 Plant Hire Ireland.</div>
          <h4>Plant Hire Ireland</h4>
          <div className={'Footer-beakon-mark'}>Design & Development by <a target='_blank' href='http://beakon.ie'>Beakon</a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
