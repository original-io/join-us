import React from 'react';

const CartItem = () => (
    <div className='CartItem d-flex a-vertical mar-b-26'>
        <img src="https://i.imgur.com/6OASRM7.png"/>
        <div className="cart-item-details mar-l-20 d-flex fdir-column a-horizontal">
            <p className="s-12 mar-0 c-strong">Rasteira Tira Dedo</p>
            <p className="s-14 mar-0 w-bold c-strong">R$ 49,90</p>
        </div>
        <div className="qty-btn d-flex">
            <div className="d-flex a-center c-white clickable s-16 w-bold">-</div>
            <div className="qty d-flex a-center c-dark-blue font-gotham-bold s-14">01</div>
            <div className="d-flex a-center c-white clickable s-16 w-bold">+</div>
        </div>
        <span className="clickable c-light s-24 mar-l-50 mar-r-32">&times;</span>
    </div>
)

export default CartItem;