import React, { Component } from 'react';
import img from '../imgs/prod-full.svg';

class ProdutoImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="produtoImage">
        <img src={this.props.produtoImage} />
      </div>
    );
  }
}

export default ProdutoImage;
