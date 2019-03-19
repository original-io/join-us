import React, { Component } from 'react';
import Swiper from 'swiper';
import bolsa from '../imgs/bolsa.svg';
import sapato from '../imgs/sapato.svg';
import carteira from '../imgs/carteira.svg';
import sandalia from '../imgs/prod-full.svg';

class ProdutoRelacionado extends Component {

  componentDidMount(){
    var mySwiper = new Swiper('.produtoRelacionado-slider.swiper-container', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 10,
      navigation: {
        nextEl: '.produtoRelacionado-slider .swiper-button-next',
        prevEl: '.produtoRelacionado-slider .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      slidesPerView: 4,
    });
  }

  render() {
    return (
      <div className="produtoRelacionado">
        <h4>Quem viu viu também</h4>
        <div className="produtoRelacionado-list">
          <div className="produtoRelacionado-slider swiper-container">
            <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="produtoRelacionado-item">
                    <img src={bolsa} />
                    <div className="sobre-item"><p>+</p></div>
                    <div className="flex flex-space-between">
                      <p className="price">R$ 204,90</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="produtoRelacionado-item">
                    <img src={sapato} />
                    <div className="sobre-item"><p>+</p></div>
                    <div className="flex flex-space-between">
                      <p className="price">R$ 204,90</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="produtoRelacionado-item">
                    <img src={sandalia} />
                    <div className="sobre-item"><p>+</p></div>
                    <div className="flex flex-space-between">
                      <p className="price">R$ 204,90</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="produtoRelacionado-item">
                    <img src={carteira} />
                    <div className="sobre-item"><p>+</p></div>
                    <div className="flex flex-space-between">
                      <p className="price">R$ 204,90</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="produtoRelacionado-item">
                    <img src={bolsa} />
                    <div className="sobre-item"><p>+</p></div>
                    <div className="flex flex-space-between">
                      <p className="price">R$ 204,90</p>
                    </div>
                  </div>
                </div>

            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProdutoRelacionado;
