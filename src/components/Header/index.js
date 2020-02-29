import React, { useState } from 'react';

//Assets
import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png'
import Cart from '../../assets/cart.png'

const Header = () => {
    const [searchActive, setSearch] = useState(false);
    const navItems = ["Sapatos", "Bolsas", "Acessórios", "Off"];

    return (
        <div className="cw-max-view">
            <div className='top-header d-flex a-center'><img src={Logo}/></div>
            <div className="bottom-head-nav d-flex a-between a-vertical pad-h-40">
                <div className="login-listing s-12">
                    <a href="#">Entrar</a>
                    <span className="mar-h-8">|</span>
                    <a href="#">Cadastrar-se</a>
                </div>
                <ul className="nav-listing font-gotham d-flex a-center s-14">
                    {navItems.map(label => <li key={label}><a href="#">{label.toUpperCase()}</a></li>)}
                </ul>
                <div className="search-container d-flex a-flex-end a-vertical">
                    <div className={`head-search mar-r-24 c-black d-flex a-vertical ${searchActive ? "active" : "inactive"}`}>
                        <img src={Search} className="head-search-icon mar-r-16"/>
                        <input onBlur={() => setSearch(!searchActive)} onFocus={() => setSearch(!searchActive)} placeholder="Busca" className="head-search-box no-border" type="text"/>
                    </div>
                    <div className="d-flex a-vertical">
                        <img className="mar-r-4" src={Cart}/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;