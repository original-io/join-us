import React, { Component } from 'react';
import img from '../imgs/prod-full.svg';

class ProdutoImage extends Component {

  render() {
    return (
      <div className="produtoImage">
        <img src={img} />
      </div>
    );
  }
}

export default ProdutoImage;
