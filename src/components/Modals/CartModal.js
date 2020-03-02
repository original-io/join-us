import React, { useContext } from 'react';

//Components
import CartItem from './CartItem'
import { ButtonMin } from '../Buttons'

//Context
import { ModalContext } from '../../contexts/ModalContext'

const CartModal = () => {
    const { toggleModal, cartStatus } = useContext(ModalContext);

    return (
        <div className={`CartModal pos-absolute ${cartStatus ? "" : "no-opacity no-events"}`}>
            <div className="top-cart mar-h-20 pad-h-30 mar-t-20 pad-b-12 mar-b-20 pos-relative">
                <p className="s-26 mar-0 c-orange font-gotham uppercase">Sacola</p>
                <p className="s-16 mar-0 c-light font-gotham">5 Itens</p>
                <span onClick={() => toggleModal("cartStatus")} className="pos-absolute clickable c-white d-flex a-center s-36">&times;</span>
            </div>
            <div className="bottom-cart overflow-y-scroll mar-b-30 d-flex fdir-column a-vertical mar-h-30 overflow-x-hide">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <div className="shipping-details cw-fill d-flex a-center">
                <p className="c-white s-14">Faltam R$ xx,xx para você<span className="font-montserrat mar-l-20">Ganhar Frete Grátis</span></p>
            </div>
            <div className="d-flex a-center pad-v-24 pad-l-30 pad-r-40">
                <div className="mar-r-36">
                    <p className="c-strong mar-0 s-16 font-montserrat w-bold">Total: R$ 149,00</p>
                    <p className="c-strong mar-0 s-12 font-montserrat w-medium">até 3x de R$ 49,90 sem juros</p>
                </div>
                <ButtonMin color="#32917B" label="Finalizar Compra" style={{width: 235}} func={() => null}/>
            </div>
        </div>
    )
}

export default CartModal;