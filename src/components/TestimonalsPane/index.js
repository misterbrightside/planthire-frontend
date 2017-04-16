import React, { Component } from 'react';
import LeftArrow from './arrow-left.svg';
import RightArrow from './arrow-right.svg';
import './TestimonalsPane.css';

const Testimonal = ({ message, person, from }) => (
  <div className={'Testimonal'}>
    <div className={'Testimonal-message'}>{message}</div>
    <div className={'Testimonal-person'}>{person}</div>
    <div className={'Testimonal-fromLocation'}>{from}</div>
  </div>
);

const testimonals = [{ 
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a eros vel dui eleifend scelerisque. Maecenas congue vehicula velit vel pretium. Praesent egestas pulvinar enim, in facilisis ex lacinia in. Maecenas in diam mi. Aenean eget pharetra magna, eu lacinia dolor. Proin ligula lacus, commodo eu rhoncus nec, fringilla sed arcu. Donec congue tincidunt ex, eget vehicula eros pharetra vel.",
  person: "John Brennan",
  from: "Pepperstown, Ardee"
}, {
  message: "This is absolutely fabulos.",
  person: "Keith Geoghagan",
  from: "Kilkerly, Dundalk"
}, {
  message: "This is an absolute gamechanger.",
  person: "Cian Breathnach",
  from: "Dundalk, Co. Louth"
}, {
  message: "😍",
  person: "Joe Bloggs",
  from: "Navan, Co. Meath"
}];

class TestimonalsPane extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testimonals: testimonals,
      cursorPosition: 0
    }
  }

  incrementCursor = () => (
    this.setState(prevState => ({
      cursorPosition: (prevState.cursorPosition + 1) % prevState.testimonals.length
    }))
  )

  decrementCursor = () => (
    this.setState(prevState => {
      const newPosition = (prevState.cursorPosition - 1) % prevState.testimonals.length;
      return ({
        cursorPosition: newPosition < 0 ? prevState.testimonals.length - 1 : newPosition
      });
    })
  )

  setCursor = (index) => () => (
    this.setState(prevState => ({
      cursorPosition: index
    }))
  )

  render() {
    const { cursorPosition, testimonals } = this.state;
    return (
      <div>
        <div className={'Testimonals-pane'}>
          <div
            className={'Testimonals-pane-arrow'}
            onClick={this.decrementCursor}
          >
            <img src={LeftArrow} alt={'Left arrow for slider'} className={'Testimonal-pane-arrow-svg'} />
          </div>
          <Testimonal {...testimonals[cursorPosition]} />
          <div
            className={'Testimonals-pane-arrow'}
            onClick={this.incrementCursor}
          >
            <img src={RightArrow} alt={'Right arrow for slider'} className={'Testimonal-pane-arrow-svg'} />
          </div>
        </div>
        <div className={'Testimonals-pane-circle-display'}>
          { testimonals.map((testimonal, index) => 
            <span
              key={`testimonal-${index}`}
              className={cursorPosition === index ? 'active' : 'inactive'}
              onClick={this.setCursor(index)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TestimonalsPane;