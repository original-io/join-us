import React, { Component } from 'react';

import vtex from './Vtex.png';
import ebit from './Ebit.png';

class Badges extends Component {
  render() {
    return (
      <div class="badges">
        <ul class="list-inline">
          <li className="list-inline-item"><img class="badges__vtex" src={vtex} alt="Vtex Certified" /></li>
          <li className="list-inline-item"><img class="badges__ebit" src={ebit} alt="eBit - Ouro" /></li>
        </ul>
      </div>
    );
  }
}

export default Badges;