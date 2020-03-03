import React, { useContext } from 'react';

//Components
import CartItem from './CartItem'
import { ButtonMin } from '../../Buttons'

//Partials
import { calculator } from '../../../partials'

//Context
import { CartContext } from '../../../contexts/CartContext'
import { ModalContext } from '../../../contexts/ModalContext'

const CartModal = () => {
    const { toggleModal, cartStatus } = useContext(ModalContext);
    const { cartList } = useContext(CartContext);
    const total = cartList.length > 0 ? cartList.map((product) => calculator(parseFloat(product.price), 20, 6).discountedPriceNum * product.qty).reduce((total, num) => total + num): ""
    const { price, discountedPriceNum } = calculator(parseFloat(total), 20, 6)
    const rateValue = (discountedPriceNum / 3).toLocaleString("pt-BR",{style: "currency", currency: "BRL"})

    return (
        <div className={`CartModal pos-absolute ${cartStatus ? "" : "no-opacity no-events"}`}>
            <div className="top-cart mar-h-20 pad-h-30 mar-t-20 pad-b-12 mar-b-20 pos-relative">
                <p className="s-26 mar-0 c-orange font-gotham uppercase">Sacola</p>
                <p className="s-16 mar-0 c-light font-gotham">{`${cartList.length} Itens`}</p>
                <span onClick={() => toggleModal("cartStatus")} className="pos-absolute clickable c-white d-flex a-center s-36">&times;</span>
            </div>
            <div className="bottom-cart overflow-y-scroll mar-b-30 d-flex fdir-column a-vertical mar-h-30 overflow-x-hide">
                {
                    cartList.length > 0 ?
                        cartList.map((item) => <CartItem product={item}/>)
                    :
                        <p className="s-14 c-light">Não há produtos no carrinho</p>
                }
            </div>
            <div className="shipping-details cw-fill d-flex a-center">
                <p className="c-white s-14">Faltam R$ xx,xx para você<span className="font-montserrat mar-l-20">Ganhar Frete Grátis</span></p>
            </div>
            <div className="d-flex a-vertical a-between pad-v-24 pad-l-30 pad-r-40">
                <div className="mar-r-36">
                    <p className="c-strong mar-0 s-16 font-montserrat w-bold">Total: {`${price}`}</p>
                    <p className="c-strong mar-0 s-12 font-montserrat w-medium">até 3x de {`${rateValue}`} sem juros</p>
                </div>
                <ButtonMin color={cartList.length > 0 ? "#32917B" : "#8c8c8c" } label="Finalizar Compra" style={{width: 235}} func={() => null}/>
            </div>
        </div>
    )
}

export default CartModal;