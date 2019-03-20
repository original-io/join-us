import React, { Component } from 'react';
import '../css/Footer.css';
import $ from 'jquery';
import facebook from '../imgs/facebook.svg';
import instagram from '../imgs/instagram.svg';
import pint from '../imgs/pint.svg';
import vtex from '../imgs/vtex.svg';
import ebit from '../imgs/ebit.svg';
import logoFooter from '../imgs/logo-footer.svg';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      badges: 0
    };
  }

  componentDidMount(){
    $(".footer input").focusin((e) => {
      $(e.target).parent().find("label").addClass('active');
    })
    $(".footer input").focusout((e) => {
      if ($(e.target).val() == "") {
        $(e.target).parent().find("label").removeClass('active');
      }
    })
  }

  render() {
    return (
      <div className="footer">
        <footer>
          <div className="container">
            <div className="flex flex-column{">
              <div className="redes-sociais flex">
                <a href="">
                  <img src={facebook} />
                </a>
                <a href="">
                  <img src={instagram} />
                </a>
                <a href="">
                  <img src={pint} />
                </a>
              </div>
            </div>
            <div className="flex flex-vertical-center">
              <div className="certificados flex">
                <img src={vtex} />
                <img src={ebit} />
              </div>
              <div className="footer-menu flex flex-space-between">
                <div className="footer-menu-box">
                  <div className="footer-menu-box-header">
                    <h6>Institucional</h6>
                  </div>
                  <div className="footer-menu-box-content">
                    <ul>
                      <li>
                        <a href="">
                          A Marca
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Lojas
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Contatos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-menu-box">
                  <div className="footer-menu-box-header">
                    <h6>Informações</h6>
                  </div>
                  <div className="footer-menu-box-content">
                    <ul>
                      <li>
                        <a href="">
                          Formas de Pagamento
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Trocas e Devoluções
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Cuidados Com o Produto
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-menu-box">
                  <div className="footer-menu-box-header">
                    <h6>Conheça</h6>
                  </div>
                  <div className="footer-menu-box-content">
                    <ul>
                      <li>
                        <a href="">
                          Franquias e Multimarcas
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Trabalhe com a Gente
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Procon-RJ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-form">
                  <h6>Assine nossa news</h6>
                  <form>
                    <div className="form-control">
                      <input id="nome" />
                      <label htmlFor="nome" className="flex flex-vertical-center">Nome</label>
                    </div>
                    <div className="form-control">
                      <input id="email" />
                      <label htmlFor="email" className="flex flex-vertical-center">E-mail</label>
                    </div>
                    <div className="form-control flex flex-space-center">
                      <button className="btn btn-info btn-medium">Enviar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="flex flex-space-between flex-align-center">
                  <div>
                    <p>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</p>
                    <p>Av. das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - Rj - CEP: 22640-100</p>
                    <p>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p>
                  </div>
                  <img src={logoFooter} alt="Original"/>
                </div>
              </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default Header;
