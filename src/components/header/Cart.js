import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <button className="btn btn-sm btn-link cart__button">0</button>
      </div>
    );
  }
}

export default Cart;