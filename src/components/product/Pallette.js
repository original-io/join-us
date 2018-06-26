import React, { Component } from 'react';

import { findColorById } from '../../utils/repository';

class Pallette extends Component {
  render() {
    const colors = this.props.colors;
    const colorList = colors.map((id) => findColorById(id));
    const colorListItems = colorList.map((item, index) =>
      <li className="list-inline-item colors__list-item" key={index}>
        <button className="colors__button" style={{ backgroundColor: item.hex }} title={item.name}></button>
      </li>
    );

    return (
      <ul className="list-inline colors__list">
        {colorListItems}
      </ul>
    );
  }
}

export default Pallette;