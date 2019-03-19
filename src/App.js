import React, { Component } from 'react';
import { CookiesProvider } from 'react-cookie';
import Home from './pages/Home';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <div className="App">
          <Home />
        </div>
      </CookiesProvider>
    );
  }
}

export default App;
