import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.visible === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }

  render() {
    const drawerClass = this.state.visible === false
      ? 'drawer close'
      : 'drawer open';

    const overlayClass = this.state.visible === false
      ? 'hidden'
      : 'grey';
    return (
      <div className='container'>
        <div>
          <i onClick={this.handleClick} className='fa-solid fa-bars fa-2xl'></i>
        </div>
        <div className={drawerClass}>
          <h1>Choose a Game!</h1>
          <a onClick={this.handleClick}>Valorant</a>
          <a onClick={this.handleClick}>League of Legos</a>
          <a onClick={this.handleClick}>Minecraft lol</a>
          <a onClick={this.handleClick}>Life</a>
        </div>
        <div onClick={this.handleClick} className={overlayClass}></div>
      </div>
    );
  }
}

export default AppDrawer;
