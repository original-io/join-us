import React, { Component } from 'react';
import Swiper from 'swiper';
import img from '../imgs/prod02.svg';
import player from '../imgs/player.svg';
import ProdutoImage from "./ProdutoImage";
import ProdutoDetail from "./ProdutoDetail";
import ProdutoRelacionado from "./ProdutoRelacionado";
import '../css/Produto.css';

class Produto extends Component {

  constructor(props) {
    super(props);
  }

  handleChildClick(name){
    this.props.handleClick(name);
  }

  componentDidMount(){
    var mySwiper = new Swiper('.produto-slider.swiper-container', {
      direction: 'vertical',
      loop: false,
      spaceBetween: 10,
      navigation: {
        nextEl: '.produto-slider.swiper-button-next',
        prevEl: '.produto-slider.swiper-button-prev',
      },
      slidesPerView: 4,
      slidesPerGroup: 1,
    });
  }

  render() {
    return (
      <div className="produto">
      <div className="line"></div>
        <div className="container">
          <div className="flex">
            <div className="produtoImgs flex flex-column flex-vertical-center flex-space-between">
              <div className="video flex flex-column flex-vertical-center">
                <p>Video</p>
                <img src={player} />
              </div>
              <div className="produto-slider swiper-button-prev"></div>
              <div className="produto-slider swiper-container">
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
              <div className="produto-slider swiper-button-next"></div>
            </div>
            <ProdutoImage produtoImage={this.props.produto.imageFull}/>
            <ProdutoDetail handleClick={this.handleChildClick.bind(this)} produtoInfo={this.props.produto}/>
          </div>
          <ProdutoRelacionado />
        </div>
      </div>
    );
  }
}

export default Produto;
