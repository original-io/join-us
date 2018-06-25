import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const listItems = this.props.menuItems;
    const list = listItems.map((menuItem, index) =>
      <li className="list-inline-item menu__list-item" key={index}>
        <a className="menu__list-item-link" href="#">{menuItem}</a>
      </li>
    );

    return (
      <nav className="menu">
        <ul className="list-inline menu__list">
          {list}
        </ul>
      </nav>
    );
  }
}

export default Menu;