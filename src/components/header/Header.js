import React, { Component } from 'react';

import Menu from './Menu';
import Login from './Login';
import Search from './Search';
import Cart from './Cart';

import menuItems from '../../model/Menu';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container-fluid header__logo">
          <h1 className="text-center">Original.io</h1>
        </div>
        <div className="container-fluid header__subheader">
          <div class="container">
            <div className="row">
              <div className="text-left col-lg-3 col-5 order-1 text-left">
                <Login />
              </div>
              <div className="text-center col-lg-6 order-lg-2 col-12 order-3">
                <Menu menuItems={menuItems} />
              </div>
              <div className="text-right col-lg-3 col-7 order-2 order-lg-3">
                <div className="row">
                  <div className="col-7">
                    <Search />
                  </div>
                  <div className="col-5">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;