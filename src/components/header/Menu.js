import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const list = this.props.menu;
    const listItems = list.map((item, index) =>
      <li className="list-inline-item menu__list-item" key={index}>
        <a className="menu__list-item-link" href="#">{item}</a>
      </li>
    );

    return (
      <nav className="menu">
        <ul className="list-inline menu__list">
          {listItems}
        </ul>
      </nav>
    );
  }
}

export default Menu;