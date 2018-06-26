import React, { Component } from 'react';

import { findProductById } from '../../utils/repository';

class Related extends Component {
  render() {
    const product = this.props.product;
    const relatedProducts = product.relatedProducts
      .map((id) => findProductById(id))
      .map((item) =>
        <div className="col-3" key={item.id}>
          <div className="related__product">
            <div className="related__product-container">
              <img className="img-fluid" src={require("../../assets/img/product/" + item.images[0])} alt={item.name} />
              <h4 className="h5 related__product-heading">{item.name}</h4>
              <a href="#" className="related__product-button">+</a>
            </div>
            <span className="related__product-price">R$ {item.price.toFixed(2)}</span>
          </div>
        </div>
      );

    return (
      <aside className="related">
        <div className="container">
          <h3 className="related__heading">Quem viu viu também</h3>
          <div className="row">
            {relatedProducts}
          </div>
        </div>
      </aside>
    );
  }
}

export default Related;