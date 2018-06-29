import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item breadcrumb__item">Home</li>
            <li class="breadcrumb-item active breadcrumb__item--active" aria-current="page">Sapatos</li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Breadcrumb;