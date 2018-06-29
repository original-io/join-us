import React, { Component } from 'react';

import { findProductById } from '../../utils/repository';
import { findColorById } from '../../utils/repository';

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
            <div class="row align-items-center">
              <div class="col-md-6">
                <span className="related__product-price">R$ {item.price.toFixed(2)}</span>
              </div>
              <div class="col-md-6">
                <ul className="list-inline related__product-colors">
                  {
                    item.colors
                      .map((id) => findColorById(id))
                      .map((color) =>
                        <li className="list-inline-item related__product-colors-item" key={color.id}>
                          <button
                            className="related__product-colors-btn"
                            style={{ backgroundColor: color.hex }} title={color.name}
                          >
                          </button>
                        </li>
                      )
                  }
                </ul>
              </div>
            </div>
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