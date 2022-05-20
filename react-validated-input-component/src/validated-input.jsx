import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let icon = 'fa-solid fa-xmark fa-xl';
    let message = '';

    if (this.state.password.length === 0) {
      message = 'A password is required.';
    } else if (this.state.password.length > 0 && this.state.password.length < 8) {
      message = 'Your password is too short.';
    } else if (this.state.password.length >= 8) {
      icon = 'fa-solid fa-check fa-xl';
    }

    return (
      <div className='container'>
        <div><label htmlFor='password'>Password</label></div>
        <input name="password"
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.handlePasswordChange} />
          <p> <i className={icon}></i> </p>
          <div className='message red'>{message}</div>
      </div>
    );
  }
}

export default ValidatedInput;
