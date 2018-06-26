import React, { Component } from 'react';

import Pallette from './Pallette';

import { findColorById } from '../../utils/repository';

class Colors extends Component {
  render() {
    const colors = this.props.colors;
    const defaultColor = colors.map((id) => findColorById(id))[0];

    return (
      <div className="colors">
        <div class="colors__description">
          <label>Cor:</label> <span style={{ color: defaultColor.hex }} className="colors__description-name">{defaultColor.name}</span>
        </div>
        <Pallette colors={colors} />
      </div>
    );
  }
}

export default Colors;