import React, { Component } from 'react';

import facebook from '../../assets/img/footer/facebook.svg';
import instagram from '../../assets/img/footer/instagram.svg';
import pinterest from '../../assets/img/footer/pinterest.svg';

class Social extends Component {
  render() {
    return (
      <div className="redes">
        <ul className="list-inline redes__list">
          <li className="list-inline-item redes__list-item">
            <a href="#">
              <img src={facebook} />
            </a>
          </li>
          <li className="list-inline-item redes__list-item">
            <a href="#">
              <img src={instagram} />
            </a>
          </li>
          <li className="list-inline-item redes__list-item">
            <a href="#">
              <img src={pinterest} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;