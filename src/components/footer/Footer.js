import React, { Component } from 'react';

import Newsletter from './Newsletter';
import Sitemap from './Sitemap';
import Social from './Social';
import Badges from './Badges';
import Contact from './Contact';

import sitemap from '../../api/sitemap';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-7 order-lg-3 order-md-2 order-sm-2">
              <Newsletter />
            </div>
            <div className="col-lg-2 col-md-7 col-sm-5 order-lg-1 order-md-1 order-sm-1 order-3 align-self-center">
              <div className="row">
                <div className="col-sm-12 col-6">
                  <Social />
                </div>
                <div className="col-sm-12 col-6">
                  <Badges />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-md-3 order-sm-3 order-2">
              <Sitemap sitemap={sitemap} />
            </div>
          </div>
        </div>
        <Contact />
      </footer>
    );
  }
}

export default Footer;