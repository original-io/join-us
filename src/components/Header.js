import React, { Component } from 'react';
import { WithCookies, Cookies } from 'react-cookie';
import $ from 'jquery';
import logo from '../imgs/original.svg';
import lupa from '../imgs/find.svg';
import cesta from '../imgs/cesta.svg';
import bolsamenu from '../imgs/bolsa-menu.svg';
import acessoriomenu from '../imgs/acessorios-menu.svg';
import '../css/Header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      badges: 0
    };
  }

  componentDidMount(){
    $(".header ul li").hover((e) => {
      $(e.target).find('.submenu').fadeIn(300);
    }, (e) => {
      $(e.target).find('.submenu').fadeOut(300);
    })
  }

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
                    <div className="submenu">
                      <div className="flex flex-vertical-center flex-space-between">
                        <div className="submenu-header flex flex-column flex-1">
                          <p className="submenu-title">Bolsas</p>
                          <a className="submenu-verTodos" href="">Ver todas</a>
                        </div>
                        <div className="submenu-content flex-2">
                          <ul>
                            <li>
                              <a href="">
                                Bolsas Pequenas
                              </a>
                            </li>
                            <li>
                              <a href="">
                                Bolsas Grandes
                              </a>
                            </li>
                            <li>
                              <a href="">
                                Bolsas de Tecido
                              </a>
                            </li>
                            <li>
                              <a href="">
                                Bolsas Maletas
                              </a>
                            </li>
                            <li>
                              <a href="">
                                Bolsas Sacos
                              </a>
                            </li>
                            <li>
                              <a href="">
                                Mochilas
                              </a>
                            </li>
                            <li>
                              <a href="">
                                Malas
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex-1">
                          <img src={bolsamenu} />
                        </div>
                      </div>
                    </div>
                </li>
                <li>
                  <p>Acessórios</p>
                  <div className="submenu">
                    <div className="flex flex-vertical-center flex-space-between">
                      <div className="submenu-header flex flex-column flex-1">
                        <p className="submenu-title">Acessórios</p>
                        <a className="submenu-verTodos" href="">Ver todos</a>
                      </div>
                      <div className="submenu-content flex-2">
                        <ul>
                          <li>
                            <a href="">
                              Bijoux
                            </a>
                          </li>
                          <li>
                            <a href="">
                              Carteiras
                            </a>
                          </li>
                          <li>
                            <a href="">
                              Cintos
                            </a>
                          </li>
                          <li>
                            <a href="">
                              Necessaires
                            </a>
                          </li>
                          <li>
                            <a href="">
                             Organizadores
                            </a>
                          </li>
                          <li>
                            <a href="">
                              Pros Dias de Sol
                            </a>
                          </li>
                          <li>
                            <a href="">
                              Leve Por Aí
                            </a>
                          </li>
                          <li>
                            <a href="">
                              É Tendência
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <img src={acessoriomenu} />
                      </div>
                    </div>
                  </div>
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
                <p id="badges">{this.props.badges}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
