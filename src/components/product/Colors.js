import React, { Component } from 'react';

import { findColorById } from '../../utils/repository';

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenColor: this.props.colors.map((id) => findColorById(id))[0] }
    this.handleClick.bind(this);
  }

  handleClick(color) {
    this.setState({ chosenColor: color });
  }

  render() {
    const colors = this.props.colors;
    const chosenColor = this.state.chosenColor;
    const colorList = colors.map((id) => findColorById(id));
    const colorListItems = colorList.map((color, index) =>
      <li className="list-inline-item colors__list-item" key={index}>
        <button className="colors__button" style={{ backgroundColor: color.hex }} title={color.name} onClick={() => this.handleClick(color)}></button>
      </li>
    );

    return (
      <div className="colors">
        <div className="colors__description">
          <label>Cor:</label> <span style={{ color: chosenColor.hex }} className="colors__description-name">{chosenColor.name}</span>
          <ul className="list-inline colors__list">
            {colorListItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Colors;