import React, { Component } from 'react';

import { findSubmenuById } from '../../utils/repository';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  handleInteraction(menu) {
    this.props.onMenuChange(findSubmenuById(menu.submenu));
  }

  render() {
    const menu = this.props.menu;
    const menuItems = menu.map((item) =>
      <li className="list-inline-item menu__list-item" key={item.id}>
        <a className="menu__list-item-link" href="#" onMouseOver={() => this.handleInteraction(item)} onClick={() => this.handleInteraction(item)}>{item.title}</a>
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