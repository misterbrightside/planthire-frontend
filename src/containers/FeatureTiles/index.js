import React, { Component } from 'react';
import Ireland from './Ireland.svg';
import { Link } from 'react-router';
import './FeatureTiles.css';

const Tile = ({ text, image, linkTo }) => (
  <div className={'Tile'}>
    <Link to={linkTo}>
      <div
        className={'FeatureTiles-tile'}
        style={{ backgroundImage: `url(${image})`}}
      >
        <div className={'FeatureTiles-text'}>{text}</div>
      </div>
    </Link>
  </div>
);

class FeatureTiles extends Component {
  render() {
    return (
      <div className={'FeatureTiles'}>
        <Tile
          text={'Plant Locator'}
          image={Ireland}
          linkTo={'/'}
        />
        <Tile
          text={'Register Company'}
          linkTo={'/portal/company/register'}
        />
      </div>
    );
  }
}

export default FeatureTiles;
