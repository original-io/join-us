import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <address className="contact__address">
            Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP<br />
            Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100<br />
          </address>
          <span>
            CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;