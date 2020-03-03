import React from 'react';

//Partials
import { calculator } from '../../../partials'

const Pricing = ({product}) => {
    const { discountedPrice, price, times, timesPrice } = calculator(parseFloat(product.price), 20, 6)

    return (
        <div>
            <span className="font-gotham-bold c-strong s-26">{product.name.toUpperCase()}</span>
            <p className="s-14 c-strong mar-0">{product.id1} | {product.id2}</p>
            <p className="s-14 c-orange mar-t-20 mar-0">{price} | <span className="font-gotham-bold mar-l-6 c-black s-20">{discountedPrice}</span></p>
            <p className="c-light2 mar-0 s-12">Ou {times}x de {timesPrice}</p>
        </div>
    )
}

export default Pricing;