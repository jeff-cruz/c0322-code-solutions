import React from 'react';

let clicks = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { clickNumber: clicks };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clickNumber: clicks++
    }));
  }

  render() {
    return (
      <button onClick = {this.handleClick}>
        {this.state.clickNumber}
      </button>
    );
  }
}

export default HotButton;
