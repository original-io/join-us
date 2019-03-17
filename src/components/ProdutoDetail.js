import React, { Component } from 'react';

class ProdutoDetail extends Component {

  render() {
    return (
      <div className="produtoDetail">
        <h1>Rasteira tira dedo</h1>
        <p className="codProd">RT 0568 | 03.07.0653</p>
        <div className="flex flex-vertical-center">
          <p className="text-danger off-price"><span className="text-through">R$ 69,00</span> |</p>
          <p className="price">R$ 55,22</p>
        </div>
        <p className="parcelas">ou <span>6</span>x de R$<span>9,20</span></p>
        <div className="flex flex-vertical-center">
          <h4>Cor:</h4>
          <span className="fucsia">(Fucsia)</span>
        </div>
        <div className="paleta-cores flex flex-vertical-center">
          <div className="form-control">
            <input checked id="cor-1" name="cor" type="radio" />
            <label for="cor-1">
              <div className="circle">
              </div>
            </label>
          </div>
          <div className="form-control">
            <input id="cor-2" name="cor" type="radio" />
            <label for="cor-2">
              <div className="circle">
              </div>
            </label>
          </div>
        </div>
        <div className="tamanhos flex flex-vertical-center flex-space-between">
          <div className="flex flex-vertical-center">
            <h4>Tamanho:</h4>
            <span className="fucsia">(37)</span>
          </div>
          <a className="link" href="">Guia de medidas</a>
        </div>
      </div>
    );
  }
}

export default ProdutoDetail;
