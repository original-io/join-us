import React from 'react';

//Assets
import Logo from '../../assets/logo-white.png'


const BottomFooter = () => (
    <div className='BottomFooter d-flex a-between a-vertical'>
        <div className="c-white">
            <p className="mar-0 s-12">Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</p>
            <p className="mar-0 s-12">Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</p>
            <p className="mar-0 s-12">CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p>
        </div>
        <img src={Logo}/>
    </div>
)

export default BottomFooter;