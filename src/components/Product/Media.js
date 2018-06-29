import React, { Component } from 'react';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = { mainImg: this.props.product.images[0] }
    this.galleryHandleClick.bind(this);
  }

  galleryHandleClick(image) {
    this.setState({ mainImg: image });
  }

  render() {
    const product = this.props.product;
    const mainImg = this.state.mainImg;
    const gallery = product.images
      .map((image, key) =>
        <li className="media__gallery-list-item" key={key}>
          <button className="media__gallery-button"
            className={
              (image === mainImg)
                ? "media__gallery-button media__gallery-button--active"
                : "media__gallery-button"
            }
            onClick={() => this.galleryHandleClick(image)}
          >
            <img
              className="img-fluid"
              src={require("../../assets/img/product/" + image)}
              alt={product.name}
            />
          </button>
        </li>
      );

    return (
      <div className="media">
        <div className="row align-items-center">
          <div className="col-sm-2 col-3">

            <div className="media__video">
              <button className="media__video-button">
                Vídeo
              </button>
            </div>

            <div className="media__gallery">
              <ul className="list-unstyled media__gallery-list">
                {gallery}
              </ul>
            </div>

          </div>
          <div className="col-sm-9 col-9 offset-sm-1">

            <div className="media__image">
              <img className="img-fluid" src={require("../../assets/img/product/" + mainImg)} alt={product.name} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Media;