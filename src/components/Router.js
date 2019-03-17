import React, { Component } from 'react';
import '../css/Router.css';

class Router extends Component {
  render() {
    return (
      <div className="router container">
        <div className="flex flex-vertical-center">
          <p>Home</p>
          <p>/</p>
          <span>Sapatos</span>
        </div>
      </div>
    );
  }
}

export default Router;
