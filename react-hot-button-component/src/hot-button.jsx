import React from 'react';

let clicks = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickNumber: clicks };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickNumber: clicks++ });
  }

  render() {
    if (this.state.clickNumber < 3) {
      return (
      <button onClick = {this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickNumber < 6) {
      return (
        <button className="purple white-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickNumber < 9) {
      return (
        <button className="light-purple white-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickNumber < 12) {
      return (
        <button className="salmon white-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickNumber < 15) {
      return (
        <button className="orange black-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickNumber < 18) {
      return (
        <button className="yellow black-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickNumber >= 18) {
      return (
        <button className="white black-text" onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}

export default HotButton;
