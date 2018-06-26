import React, { Component } from 'react';

import facebook from '../../assets/img/footer/facebook.svg';
import instagram from '../../assets/img/footer/instagram.svg';
import pinterest from '../../assets/img/footer/pinterest.svg';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <ul className="list-inline social__list">
          <li className="list-inline-item social__list-item">
            <a href="#" title="Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li className="list-inline-item social__list-item">
            <a href="#" title="Instagram">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li className="list-inline-item social__list-item">
            <a href="#" title="Pinterest">
              <img src={pinterest} alt="Pinterest" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;