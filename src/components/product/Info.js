import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Payment from './Payment';
import Colors from './Colors';
import Sizes from './Sizes';

class Info extends Component {
  constructor() {
    super();
    ReactModal.setAppElement('#root');
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const product = this.props.product;

    return (
      <div className="info">
        <div className="card info__card">
          <div className="card-body">
            <h1 className="h2 card-title info__heading">{product.name}</h1>
            <div className="card-subtitle">
              <ul className="list-inline info__list">
                <li className="list-inline-item info__list-item">{product.rt}</li>
                <li className="list-inline-item info__list-item">{product.code}</li>
              </ul>
            </div>
            <Payment product={product} />
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <div className="info__cart">
              <button
                className="btn btn-success btn-lg btn-block"
                onClick={this.handleOpenModal}
              >
                Adicionar à sacola
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Adicionado com sucesso!"
                onRequestClose={this.handleCloseModal}
                className="react-modal"
                overlayClassName="react-modal__overlay"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal"
                        aria-label="Fechar" onClick={this.handleCloseModal}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid" src={require("../../assets/img/product/" + product.images[0])} alt={product.name} />
                      <h4 className="react-modal__heading">Adicionado com sucesso!</h4>
                      <button
                        type="button"
                        className="btn btn-success btn-lg btn-block react-modal__btn-success"
                      >
                        Finalizar compra
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-block react-modal__btn-dismiss"
                        data-dismiss="modal" onClick={this.handleCloseModal}>
                        Continuar Comprando
                      </button>
                    </div>
                  </div>
                </div>
              </ReactModal>
            </div>
            <p className="card-text">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;