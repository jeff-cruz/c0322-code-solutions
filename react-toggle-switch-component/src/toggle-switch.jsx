import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    return (
      <button onClick = { this.handleClick }>
        {this.state.isClicked ? 'On' : 'Off'};
      </button>
    );
  }
}

export default ToggleSwitch;
