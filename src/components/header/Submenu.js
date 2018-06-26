import React, { Component } from 'react';

class Submenu extends Component {
  render() {
    const submenus = this.props.submenu;
    const chosenMenu = this.props.chosenMenu;
    const submenu = submenus.map(
      function (item) {
        const classNameSubmenu = (item === chosenMenu) ? "submenu__item submenu__item-active" : "submenu__item";

        return (
          <div className={classNameSubmenu}>
            <div className="row align-items-center" key={item.id}>
              <div className="col-md-2 offset-md-1">
                <h4 className="submenu__heading">
                  {item.title}
                </h4>
              </div>
              <div className="col-md-4 offset-md-1">
                <ul className="list-unstyled submenu__list">
                  {
                    item.items.map((item, index) =>
                      <li className="submenu__list-item" key={index}>
                        <a href="#">{item}</a>
                      </li>
                    )
                  }
                </ul>
              </div>
              <div className="col-md-4">
                <img className="img-fluid" src={require("../../assets/img/header/acessorios.png")} />
              </div>
            </div>
          </div >
        )
      }
    );

    return (
      <div className="submenu" >
        <div className="container">
          {submenu}
        </div>
      </div>
    );
  }
}

export default Submenu;