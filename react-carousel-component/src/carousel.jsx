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

  componentDidMount() {
    this.timer = setInterval(() => this.handleNext(), 2000);
  }

  handleNext() {
    clearInterval(this.timer);
    this.componentDidMount();

    if (this.state.currentImage >= this.props.pokedex.length) {
      this.setState({ currentImage: 1 });
    } else {
      this.setState(prevState => ({
        currentImage: prevState.currentImage + 1
      }));
    }
  }

  handlePrevious() {
    clearInterval(this.timer);
    this.componentDidMount();

    if (this.state.currentImage <= 1) {
      this.setState({ currentImage: this.props.pokedex.length });
    } else {
      this.setState(prevState => ({
        currentImage: prevState.currentImage - 1
      }));
    }
  }

  handleDotClick(event) {
    clearInterval(this.timer);
    this.componentDidMount();

    const id = parseInt(event.target.id);
    this.setState({ currentImage: id });
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
                return (this.state.currentImage === pokemon.id && (
                  <img key={pokemon.id} src={pokemon.src} />
                ));
              })}
            </div>

            <div className="col-15 align-center">
            <i onClick={this.handleNext} className="fas fa-angle-right fa-3x" id="right-arrow"></i>
            </div>
          </div>

          <div className="row">
            <div className="col-full center dot-container">
              {pokedex.map(pokemon => {
                return (
                  this.state.currentImage === pokemon.id
                    ? <i onClick={this.handleDotClick} className="fas fa-circle button" id={pokemon.id}/>
                    : <i onClick={this.handleDotClick} className="far fa-circle button" id={pokemon.id}/>
                );
              })}
            </div>
          </div>
        </div>
    );
  }
}

export default Carousel;
