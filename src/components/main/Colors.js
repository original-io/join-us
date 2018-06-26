import React, { Component } from 'react';

import { findColorById } from '../../model/main/ProductRepository';

class Colors extends Component {
  render() {
    const colors = this.props.colors;
    const colorList = colors.map((id) => findColorById(id));
    const colorListItems = colorList.map((item, index) =>
      <li className="list-inline-item" key={index}>
        <div className="colors__pallete" style={{ backgroundColor: item.hex }} title={item.name}></div>
      </li>
    );

    const defaultColor = colorList[0];

    return (
      <div className="colors">
        <div class="colors__description">
          <label>Cor:</label> <span style={{ color: defaultColor.hex }}>{defaultColor.name}</span>
        </div>
        <ul className="list-inline">
          {colorListItems}
        </ul>
      </div>
    );
  }
}

export default Colors;