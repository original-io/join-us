import React, { Component } from 'react';

import Media from './Media';
import Info from './Info';
import Related from './Related';

import { findProductById } from '../../utils/repository';

class Product extends Component {
  render() {
    const product = findProductById();

    return (
      <div className="product">
        <main>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <Media product={product} />
              </div>
              <div className="col-md-5 offset-md-1">
                <Info product={product} />
              </div>
            </div>
          </div>
        </main>
        <Related product={product} />
      </div>
    );
  }
}

export default Product;