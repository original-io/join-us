import React, { Component } from 'react';

class Submenu extends Component {
  render() {
    const submenus = this.props.submenu;
    const chosen = this.props.chosen;
    const submenu = submenus.map(
      function (item) {
        if (item === chosen) {
          return (
            <div className="submenu" key={item.id}>
              <div className="container">
                <div className="submenu__item">
                  <div className="row align-items-center">
                    <div className="col-md-2 col-2 offset-1">
                      <h4 className="submenu__heading">
                        {item.title}
                      </h4>
                    </div>
                    <div className="col-md-4 col-8 offset-1">
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
                      <img className="img-fluid submenu__img" alt="{item.title}" src={require("../../assets/img/header/submenu.png")} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }
    );

    return (
      <div className="submenu__wrapper">
        {submenu}
      </div>
    );
  }
}

export default Submenu;