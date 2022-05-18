import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks < 3) {
      return (
      <button onClick = {this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 6) {
      return (
        <button className="purple white-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 9) {
      return (
        <button className="light-purple white-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 12) {
      return (
        <button className="salmon white-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 15) {
      return (
        <button className="orange black-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 18) {
      return (
        <button className="yellow black-text" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks >= 18) {
      return (
        <button className="white black-text" onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}

export default HotButton;
