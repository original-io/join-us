import React, { Component } from 'react';
import img from '../imgs/prod-full.svg';

class ProdutoImage extends Component {

  render() {
    return (
      <div className="produtoImage">
        <img src={this.props.produtoImage} alt="Imagem do Produto"/>
      </div>
    );
  }
}

export default ProdutoImage;
