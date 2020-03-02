import React, { useState, useContext } from 'react';

//Assets
import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png'
import Cart from '../../assets/cart.png'

//Context
import { ModalContext } from '../../contexts/ModalContext'
import { CartContext } from '../../contexts/CartContext'


const Header = () => {
    const { toggleModal } = useContext(ModalContext);
    const { cartList } = useContext(CartContext);
    const [searchActive, setSearch] = useState(false);
    const navItems = ["Sapatos", "Bolsas", "Acessórios", "Off"];

    return (
        <div className="Header cw-max-view">
            <div className='top-header d-flex a-center'><img src={Logo}/></div>
            <div className="bottom-head-nav d-flex a-between a-vertical pad-h-40">
                <div className="login-listing s-12">
                    <a href="#">Entrar</a>
                    <span className="mar-h-8">|</span>
                    <a href="#">Cadastrar-se</a>
                </div>
                <nav>
                    <ul className="nav-listing font-gotham d-flex a-center s-14">
                        {navItems.map(label => <li key={label}><a href="#">{label.toUpperCase()}</a></li>)}
                    </ul>
                </nav>
                <div className="search-container d-flex a-flex-end a-vertical">
                    <div className={`head-search mar-r-24 c-black d-flex a-vertical ${searchActive ? "active" : "inactive"}`}>
                        <img src={Search} className="head-search-icon mar-r-16"/>
                        <input onBlur={() => setSearch(!searchActive)} onFocus={() => setSearch(!searchActive)} placeholder="Busca" className="head-search-box no-border" type="text"/>
                    </div>
                    <div onClick={() => toggleModal("cartStatus")} className="clickable d-flex a-vertical">
                        <img src={Cart}/>
                        <span className="font-gotham s-12 c-black">{cartList.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;