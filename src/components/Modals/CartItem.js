import React, { useContext } from 'react';

//Partials
import { calculator } from '../../partials'

//Context
import { CartContext } from '../../contexts/CartContext'

const CartItem = ({product}) => {
    const { discountedPrice } = calculator(parseFloat(product.price), 20, 6)
    const { changeQuantity, removeItem } = useContext(CartContext);
    
    return (
        <div className='CartItem d-flex a-vertical mar-b-26'>
            <img src="https://i.imgur.com/6OASRM7.png"/>
            <div className="cart-item-details mar-l-20 d-flex fdir-column a-horizontal">
                <p className="s-12 mar-0 c-strong">{product.name}</p>
                <p className="s-14 mar-0 w-bold c-strong">{discountedPrice} </p>
            </div>
            <div className="qty-btn d-flex">
                <div onClick={() => changeQuantity("sub", product.id)} className="no-select d-flex a-center c-white clickable s-16 w-bold">-</div>
                <div className="qty d-flex a-center c-dark-blue font-gotham-bold s-14">{product.qty}</div>
                <div onClick={() => changeQuantity("add", product.id)} className="no-select d-flex a-center c-white clickable s-16 w-bold">+</div>
            </div>
            <span onClick={() => removeItem(product.id)} className="clickable c-light s-24 mar-l-50 mar-r-32">&times;</span>
        </div>
    )
}

export default CartItem;