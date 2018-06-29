import React, { Component } from 'react';

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = { chosen: this.props.sizes[0] }
    this.handleClick.bind(this);
  }

  handleClick(size) {
    this.setState({ chosen: size });
  }

  render() {
    const sizes = this.props.sizes;
    const chosen = this.state.chosen;
    const sizeListItems = sizes.map((size, index) =>
      <li className="list-inline-item sizes__list-item" key={index}>
        <button
          className={
            (size === chosen)
              ? "sizes__button sizes__button--active"
              : "sizes__button"
          }
          onClick={() => this.handleClick(size)}
        >
          {size}
        </button>
      </li>
    );

    return (
      <div className="sizes">
        <label className="sizes__description-label">Tamanho:</label><span className="sizes__description-name">{chosen}</span>
        <ul className="list-inline sizes__list">
          {sizeListItems}
        </ul>
      </div>
    );
  }
}

export default Sizes;