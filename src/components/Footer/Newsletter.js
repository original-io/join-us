import React, { Component } from 'react';

class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="newsletter__circle">
          <div className="newsletter__form">
            <h3 className="newsletter__form-heading">Assine nossa News</h3>
            <form>
              <div className="form-group newsletter__form-control">
                <label className="newsletter__form-label"><small>Nome</small></label>
                <input type="text" className="form-control form-control-sm" />
              </div>
              <div className="form-group newsletter__form-control">
                <label className="newsletter__form-label"><small>Email</small></label>
                <input type="text" className="form-control form-control-sm" />
              </div>
              <div className="text-center">
                <button className="btn btn-primary newsletter__form-button" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;