import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
