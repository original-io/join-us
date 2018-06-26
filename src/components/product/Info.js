import React, { Component } from 'react';

import Payment from './Payment';
import Colors from './Colors';
import Sizes from './Sizes';

class Info extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="info">
        <div className="card info__card">
          <div className="card-body">
            <h1 className="h2 card-title info__heading">{product.name}</h1>
            <div className="card-subtitle">
              <ul className="list-inline info__list">
                <li className="list-inline-item info__list-item">{product.rt}</li>
                <li className="list-inline-item info__list-item">{product.code}</li>
              </ul>
            </div>
            <Payment product={product} />
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <div className="info__cart">
              <button className="btn btn-success btn-lg btn-block">Adicionar à sacola</button>
            </div>
            <p className="card-text">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;