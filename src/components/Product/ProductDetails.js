import React, { useState, useContext } from 'react';

//Components
import { ButtonLarge } from '../Buttons';
import Pricing from './Details/Price'
import Options from './Details/Options'

//Contexts
import { CartContext } from "../../contexts/CartContext"
import { ModalContext } from "../../contexts/ModalContext"

const ProductDetails = ({product}) => {
    const { addToCart } = useContext(CartContext), { toggleModal } = useContext(ModalContext);

    return (
        <div className='ProductDetails pad-20 ch-fit'>
            <Pricing product={product}/>
            <Options product={product}/>
            
            <ButtonLarge label="Adicionar à sacola" color="#32917B" height={60} func={() => addToCart(product).then(() => toggleModal("addToCartStatus"))}/>
            <p className="c-strong s-14 lh-high mar-0 mar-t-16">{product.description}</p>
        </div>
    )
}

export default ProductDetails;