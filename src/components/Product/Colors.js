import React, { Component } from 'react';

import { findColorById } from '../../utils/repository';

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: this.props.colors.map((id) => findColorById(id))[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(color) {
    this.setState({ chosen: color });
  }

  render() {
    const colors = this.props.colors;
    const chosen = this.state.chosen;
    const colorList = colors.map((id) => findColorById(id));
    const colorListItems = colorList.map((color) =>
      <li className="list-inline-item colors__list-item" key={color.id}>
        <button
          className={
            (color === chosen)
              ? "colors__button colors__button--active"
              : "colors__button"
          }
          style={{ backgroundColor: color.hex }} title={color.name}
          onClick={() => this.handleClick(color)}
        >
        </button>
      </li>
    );

    return (
      <div className="colors">
        <div className="colors__description">
          <label className="colors__description-label">Cor:</label><span style={{ color: chosen.hex }} className="colors__description-name">{chosen.name}</span>
          <ul className="list-inline colors__list">
            {colorListItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Colors;