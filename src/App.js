import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Content from './components/Product/Product';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
