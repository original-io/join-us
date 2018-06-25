import React, { Component } from 'react';

import facebook from './Facebook.svg';
import instagram from './Instagram.svg';
import pinterest from './Pinterest.svg';

class Social extends Component {
  render() {
    return (
      <div class="social">
        <ul class="list-inline social__list">
          <li className="list-inline-item social__list-item"><img src={facebook} alt="Facebook" /></li>
          <li className="list-inline-item social__list-item"><img src={instagram} alt="Instagram" /></li>
          <li className="list-inline-item social__list-item"><img src={pinterest} alt="Pinterest" /></li>
        </ul>
      </div>
    );
  }
}

export default Social;