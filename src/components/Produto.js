import React, { Component } from 'react';
import Swiper from 'swiper';
import img from '../imgs/prod02.svg';
import player from '../imgs/player.svg';
import ProdutoImage from "./ProdutoImage";
import ProdutoDetail from "./ProdutoDetail";
import '../css/Produto.css';

class Produto extends Component {

  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: false,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 4,
      slidesPerGroup: 1,
    });
  }

  render() {
    return (
      <div className="produto">
        <div className="container">
          <div className="flex">
            <div className="produtoImgs flex flex-column flex-vertical-center flex-space-between">
              <div className="video flex flex-column flex-vertical-center">
                <p>Video</p>
                <img src={player} />
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src={img} />
                    </div>
                    <div className="swiper-slide">
                      <img src={img} />
                    </div>
                    <div className="swiper-slide">
                      <img src={img} />
                    </div>
                    <div className="swiper-slide">
                      <img src={img} />
                    </div>
                    <div className="swiper-slide">
                      <img src={img} />
                    </div>
                    <div className="swiper-slide">
                      <img src={img} />
                    </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
            </div>
            <ProdutoImage />
            <ProdutoDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default Produto;
