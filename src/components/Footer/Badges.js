import React, { Component } from 'react';

import vtex from '../../assets/img/footer/vtex.png';
import ebit from '../../assets/img/footer/ebit.png';

class Badges extends Component {
  render() {
    return (
      <div className="badges">
        <ul className="list-inline">
          <li className="list-inline-item">
            <img className="badges__vtex" src={vtex} title="Vtex Certified" alt="Vtex Certified" />
          </li>
          <li className="list-inline-item"><img className="badges__ebit" src={ebit} title="eBit - Ouro" alt="eBit - Ouro" /></li>
        </ul>
      </div>
    );
  }
}

export default Badges;