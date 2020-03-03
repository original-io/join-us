import React, { useContext } from 'react';

//Components
import { ButtonLarge } from '../../Buttons'

//Contexts
import { ModalContext } from "../../../contexts/ModalContext"
import { CartContext } from "../../../contexts/CartContext"

const AddedCartModal = () => {
    const { addToCartStatus, toggleModal } = useContext(ModalContext);
    const { newlyAdded } = useContext(CartContext);

    return (
        <div className={`AddedCartModal pos-fixed cw-max-view ch-max-view d-flex a-center ${addToCartStatus ? "" : "no-opacity no-events"}`}>
            <div className="modal-container ch-fit d-flex fdir-column a-center pos-relative">
                <span onClick={() => toggleModal("addToCartStatus")} className="clickable close-btn pos-absolute s-40">&times;</span>
                <img src={Object.keys(newlyAdded).length > 0 ? newlyAdded.images[0] : ""}/>
                <p className="uppercase s-22 c-orange font-gotham-bold txa-center">Adicionado com sucesso!</p>
                <ButtonLarge height={50} label="Finalizar Compra" color="#32917B" func={() => toggleModal("addToCartStatus").then(() => toggleModal("cartStatus"))}/>
                <p onClick={() => toggleModal("addToCartStatus")} className="clickable td-underline c-light s-14 txa-center">Continuar Comprando</p>
            </div>
        </div>
    )
}

export default AddedCartModal;