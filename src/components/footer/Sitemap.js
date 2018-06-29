import React, { Component } from 'react';

class Sitemap extends Component {
  render() {
    const sitemap = this.props.sitemap;
    const columns = sitemap.map((column) =>
      <div className="col-4" key={column.id}>
        <h3 className="sitemap__heading">{column.heading}</h3>
        <ul className="list-unstyled sitemap__list">
          {
            column.items.map((item, index) =>
              <li className="sitemap__list-item" key={index}>
                <a className="sitemap__list-item-link" href="#">{item}</a>
              </li>
            )
          }
        </ul>
      </div>
    );

    return (
      <div className="sitemap">
        <div className="row">
          {columns}
        </div>
      </div>
    );
  }
}

export default Sitemap;