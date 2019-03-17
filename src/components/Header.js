import React, { Component } from 'react';
import logo from '../imgs/original.svg';
import lupa from '../imgs/find.svg';
import cesta from '../imgs/cesta.svg';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="flex flex-align-center">
          <img src={logo} className="logo-header"/>
        </div>
        <div className="menuList">
          <div className="flex flex-space-between container">
            <div className="flex flex-vertical-center">
              <a href="">Entrar</a>
              <span>|</span>
              <a href="">Cadastre-se</a>
            </div>
            <nav>
              <ul className="list flex flex-align-center">
                <li>
                  <p>Sapatos</p>
                </li>
                <li>
                  <p>Bolsas</p>
                </li>
                <li>
                  <p>Acessórios</p>
                </li>
                <li>
                  <p>Off</p>
                </li>
              </ul>
            </nav>
            <div className="flex flex-vertical-center">
              <label className="busca flex flex-vertical-center">
                <img src={lupa} />
                <input placeholder="Busca" />
              </label>
              <div className="flex flex-vertical-center">
                <img src={cesta} />
                <p id="badges">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
