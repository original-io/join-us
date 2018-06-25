import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <nav className="login">
        <ul className="list-inline login__list">
          <li className="list-inline-item login__list-item">
            <a className="login__list-item-link" href="#">Entrar</a>
          </li>
          <li className="list-inline-item login__list-item">
            <a className="login__list-item-link" href="#">Cadastre-se</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Login;