import React, { Component } from 'react';
import Header from '../components/Header';
import Router from '../components/Router';
import Produto from '../components/Produto';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Produto />
      </div>
    );
  }
}

export default Home;
