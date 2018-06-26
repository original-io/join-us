import React, { Component } from 'react';

import Pallette from './Pallette';

import { findProductById } from '../../utils/repository';

class Related extends Component {
  render() {
    const product = this.props.product;
    const relatedProducts = product.relatedProducts
      .map((id) => findProductById(id))
      .map((item) =>
        <div className="col-3" key={item.id}>
          <div class="related__product">
            <div class="related__product-container">
              <a href="#">
                <img className="img-fluid" src={require("../../assets/img/product/" + item.images[0])} alt={item.name} />
                <h4 class="h5">{item.name}</h4>
              </a>
            </div>
            <div class="row">
              <div class="col-6 text-left">
                <p class="related__product-price">R$ {item.price.toFixed(2)}</p>
              </div>
              <div class="col-6 text-right">
                <Pallette colors={item.colors} />
              </div>
            </div>
          </div>
        </div>
      );

    return (
      <aside className="related">
        <div className="container">
          <h3 className="related__heading">Quem viu viu também</h3>
          <div class="row">
            {relatedProducts}
          </div>
        </div>
      </aside>
    );
  }
}

export default Related;