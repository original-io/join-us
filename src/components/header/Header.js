import React, { Component } from 'react';

import Menu from './Menu';
import Login from './Login';
import Search from './Search';
import Cart from './Cart';
import Submenu from './Submenu';

import menu from '../../api/menu';
import submenu from '../../api/submenu';
import { findSubmenuById } from '../../utils/repository';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenMenu: '' }
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  handleMenuChange(chosenMenu) {
    this.setState({ chosenMenu: chosenMenu });
  }

  render() {
    const chosenMenu = this.state.chosenMenu;

    return (
      <header className="header">
        <div className="container-fluid header__logo">
          <h3 className="header__logo-heading">
            <img className="img-fluid header__logo-img" src={require("../../assets/img/shared/logo.svg")} alt="Original.io" />
          </h3>
        </div>
        <div className="header__subheader">
          <div className="container">
            <div className="row">
              <div className="text-left col-lg-2 col-5 order-1 text-left">
                <Login />
              </div>
              <div className="text-center col-lg-7 order-lg-2 col-12 order-3">
                <Menu menu={menu} onMenuChange={this.handleMenuChange} />
              </div>
              <div className="text-right col-lg-3 col-7 order-2 order-lg-3">
                <div className="row">
                  <div className="col-8">
                    <Search />
                  </div>
                  <div className="col-4">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Submenu submenu={submenu} chosenMenu={chosenMenu} />
      </header>
    );
  }
}

export default Header;