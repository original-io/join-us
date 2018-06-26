import React, { Component } from 'react';

class Payment extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="payments">
        <ul className="list-inline payments__list">
          <li className="list-inline-item payments__list-item payments__old-price">
            <s>R$ {product.oldPrice.toFixed(2)}</s>
          </li>
          <li className="list-inline-item payments__list-item payments__price">
            R$ {product.price.toFixed(2)}
          </li>
        </ul>
        <p><small>Ou {product.instalments}x de R$ {(product.price / product.instalments).toFixed(2)}</small></p>
      </div>
    );
  }
}

export default Payment;