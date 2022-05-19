import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      status: 'inactive',
      icon: 'fa-solid fa-play'
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  tick() {
    let seconds = this.state.count;
    this.setState({ count: seconds++ });
  }

  handleStartClick() {
    if (this.state.status === 'inactive') {
      this.setState({
        status: 'active',
        icon: 'fa-solid fa-pause'
      });
      this.intervalID = setInterval(() => this.tick(), 1000);
    } else if (this.state.status === 'active') {
      this.setState({
        status: 'inactive',
        icon: 'fa-solid fa-play'
      });
      clearInterval(this.intervalID);
    }
  }

  handleResetClick() {
    if (this.state.status === 'inactive') {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <button onClick={this.handleResetClick} className='circle'>{this.state.count}</button>
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
