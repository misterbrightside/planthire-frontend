import React, { Component } from 'react';
import JumboHeader from '../../components/JumboHeader';
import TextWithImage from '../../components/TextWithImage';
import Ireland from './Ireland.svg';

class About extends Component {
  render() {
    return (
      <div className="About">
        <JumboHeader
          text={'Why should you use Plant Hire Ireland?'}
        />
        <TextWithImage
          headerText={'Nationwide network of providers'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a eros vel dui eleifend scelerisque. Maecenas congue vehicula velit vel pretium. Praesent egestas pulvinar enim, in facilisis ex lacinia in. Maecenas in diam mi. Aenean eget pharetra magna, eu lacinia dolor. Proin ligula lacus, commodo eu rhoncus nec, fringilla sed arcu. Donec congue tincidunt ex, eget vehicula eros pharetra vel!'}
          imageSrc={`${Ireland}#svg1999`}
          directionOfImage={'left'}
          viewBoxSize={'0 0 900 1200'}
        />
        <TextWithImage
          headerText={'All machinery is of certified quality'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a eros vel dui eleifend scelerisque. Maecenas congue vehicula velit vel pretium. Praesent egestas pulvinar enim, in facilisis ex lacinia in. Maecenas in diam mi. Aenean eget pharetra magna, eu lacinia dolor. Proin ligula lacus, commodo eu rhoncus nec, fringilla sed arcu. Donec congue tincidunt ex, eget vehicula eros pharetra vel!'}
          imageSrc={`${Ireland}#svg1999`}
          viewBoxSize={'0 0 900 1200'}
          directionOfImage={'right'}
        />
        <TextWithImage
          headerText={'We find you the most competitive PRICES'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a eros vel dui eleifend scelerisque. Maecenas congue vehicula velit vel pretium. Praesent egestas pulvinar enim, in facilisis ex lacinia in. Maecenas in diam mi. Aenean eget pharetra magna, eu lacinia dolor. Proin ligula lacus, commodo eu rhoncus nec, fringilla sed arcu. Donec congue tincidunt ex, eget vehicula eros pharetra vel!'}
          imageSrc={`${Ireland}#svg1999`}
          directionOfImage={'left'}
          viewBoxSize={'0 0 900 1200'}
        />
      </div>
    );
  }
}

export default About;
