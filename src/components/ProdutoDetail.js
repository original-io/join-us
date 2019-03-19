import React, { Component } from 'react';
import Modal from 'react-modal';
import img from '../imgs/prod-full.svg';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : '9999'
  }
};

Modal.setAppElement('#root')

class ProdutoDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      produto: this.props.produtoInfo.tamanhos
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
    this.image = this.props.produtoInfo.imageFull
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  addProduto(){
    this.props.handleClick("rudolfo");
    this.openModal();
  }

  render() {
    return (
      <div className="produtoDetail">

        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="Modal"
            overlayClassName="Overlay"
          >

            <img ref={src => this.image = src} />
            <button className="close" onClick={this.closeModal}>X</button>
            <div className="mensagem">Adicionado com sucesso!</div>
            <button className="btn btn-success btn-large" onClick={this.closeModal}>Finalizar Compra</button>
            <a href="">Continuar comprando</a>
          </Modal>

        <h1>{this.props.produtoInfo.name}</h1>
        <p className="codProd">{this.props.produtoInfo.cod}</p>
        <div className="flex flex-vertical-center">
          <p className="text-danger off-price"><span className="text-through">{this.props.produtoInfo.priceOff}</span> |</p>
          <p className="price">{this.props.produtoInfo.price}</p>
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
        <div className="tamanhos flex flex-vertical-center">
        {
          console.log(this.props.produtoInfo.tamanhos)
        }
        <div className="form-control">
          <input checked id="tam-1" name="tamanho" type="radio" />
          <label for="tam-1">
            <div className="circle">
            33
            </div>
          </label>
        </div>

        </div>
        <button onClick={this.addProduto.bind(this)} className="btn btn-success btn-large">Adicionar à sacola</button>
        <p className="description">
            {this.props.produtoInfo.description}
        </p>
      </div>
    );
  }
}

export default ProdutoDetail;
