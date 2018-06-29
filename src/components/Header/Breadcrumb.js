import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item breadcrumb__item">Home</li>
            <li className="breadcrumb-item active breadcrumb__item--active" aria-current="page">Sapatos</li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Breadcrumb;