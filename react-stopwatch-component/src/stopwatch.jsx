import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      status: 'inactive',
      icon: 'fa-solid fa-play'
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  count() {
    let seconds = this.state.counter;
    this.setState({ counter: ++seconds });
  }

  handleStartClick() {
    if (this.state.status === 'inactive') {
      this.intervalID = setInterval(() => this.count(), 1000);
      this.setState({
        status: 'active',
        icon: 'fa-solid fa-pause'
      });
    } else if (this.state.status === 'active') {
      clearInterval(this.intervalID);
      this.setState({
        status: 'inactive',
        icon: 'fa-solid fa-play'
      });
    }
  }

  handleResetClick() {
    if (this.state.status === 'inactive') {
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <p>{this.state.counter}</p>
          <button onClick={this.handleResetClick} className='circle'></button>
        </div>
        <div className='row'>
          <button onClick={this.handleStartClick}>
            <i className={this.state.icon}></i>
          </button>
        </div>
      </div>
    );
  }

}

export default StopWatch;
