import React, { Component } from 'react';

import { findSubmenuById } from '../../utils/repository';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(menu, e) {
    e.preventDefault();
    const submenu = findSubmenuById(menu.submenu);
    this.props.onMenuChange(submenu);
  }

  render() {
    const menu = this.props.menu;
    const menuItems = menu.map((item) =>
      <li className="list-inline-item menu__list-item" key={item.id}>
        <a className="menu__list-item-link" href="#"
          onClick={(e) => this.handleClick(item, e)}
        >
          {item.title}
        </a>
      </li>
    );

    return (
      <nav className="menu">
        <div className="menu__wrapper">
          <ul className="list-inline menu__list">
            {menuItems}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;