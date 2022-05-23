import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 1
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  handleNext(event) {

  }

  handlePrevious(event) {

  }

  handleDotClick(event) {

  }

  render() {
    const pokedex = this.props.pokedex;
    return (
        <div className="container black-border">
          <div className="row center">

            <div className="col-15 align-center">
              <i onClick={this.handlePrevious} className="fas fa-angle-left fa-3x" id="left-arrow"></i>
            </div>

            <div className="col-70">
              {pokedex.map(pokemon => {
                return (this.state.currentImage === pokemon.id);
              })}
            </div>

            <div className="col-15 align-center">
            <i onClick={this.handleNext} className="fas fa-angle-right fa-3x" id="right-arrow"></i>
            </div>
          </div>

          <div className="row">
            <div className="col-full center dot-container">
              <i className="fas fa-circle button" id="0"></i>
              <i className="far fa-circle button" id="1"></i>
              <i className="far fa-circle button" id="2"></i>
              <i className="far fa-circle button" id="3"></i>
              <i className="far fa-circle button" id="4"></i>
            </div>
          </div>
        </div>
    );
  }
}

export default Carousel;
