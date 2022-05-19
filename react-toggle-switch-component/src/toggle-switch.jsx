import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'slider-background on',
      text: 'On'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggle === 'slider-background on') {
      this.setState({ toggle: 'slider-background off', text: 'Off' });
    } else {
      this.setState({ toggle: 'slider-background on', text: 'On' });
    }
  }

  render() {
    const toggleClass = this.state.text === 'On'
      ? 'slider-background on'
      : 'slider-background off';
    return (
      <div className = "row">
        <div onClick={ this.handleClick } className={ toggleClass }>
          <div className = "slider"></div>
        </div>
        <p className = "text">{ this.state.text }</p>
      </div>
    );
  }
}

export default ToggleSwitch;
