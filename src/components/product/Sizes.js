import React, { Component } from 'react';

class Sizes extends Component {
  render() {
    const sizeList = this.props.sizes;
    const sizeListItems = sizeList.map((size, index) =>
      <li className="list-inline-item sizes__list-item" key={index}>
        <button className="sizes__button">{size}</button>
      </li>
    );

    const defaultSize = sizeList[0];

    return (
      <div className="sizes">
        <label>Tamanho:</label> <span>{defaultSize}</span>
        <ul className="list-inline sizes__list">
          {sizeListItems}
        </ul>
      </div>
    );
  }
}

export default Sizes;