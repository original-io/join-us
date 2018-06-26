import React, { Component } from 'react';

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenSize: this.props.sizes[0] }
    this.handleClick.bind(this);
  }

  handleClick(size) {
    this.setState({ chosenSize: size });
  }

  render() {
    const sizes = this.props.sizes;
    const chosenSize = this.state.chosenSize;
    const sizeListItems = sizes.map((size, index) =>
      <li className="list-inline-item sizes__list-item" key={index}>
        <button className="sizes__button" onClick={() => this.handleClick(size)}>{size}</button>
      </li>
    );

    return (
      <div className="sizes">
        <label>Tamanho:</label> <span>{chosenSize}</span>
        <ul className="list-inline sizes__list">
          {sizeListItems}
        </ul>
      </div>
    );
  }
}

export default Sizes;