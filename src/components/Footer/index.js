import React, { Fragment } from 'react';

//Components
import Nav from "./Nav"
import NewsletterBox from "./NewsletterBox"
import BottomFooter from "./BottomFooter"

//Assets
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Pinterest from '../../assets/pinterest.png'
import Ebit from '../../assets/selo-ebit.png'
import VTEX from '../../assets/vtex.png'

const Footer = () => (
    <Fragment>
        <div className='Footer pad-l-70'>
            <div className="social pad-v-20">
                <a href="#"><img className="mar-r-30" src={Facebook}/></a>
                <a href="#"><img className="mar-r-30" src={Instagram}/></a>
                <a href="#"><img src={Pinterest}/></a>
            </div>
            <div className="info-container d-flex a-vertical pad-b-30 pos-relative">
                <div>
                    <img className="mar-r-32" src={VTEX}/>
                    <img className="mar-r-55" src={Ebit}/>
                </div>
                <Nav label="Institucional" items={["A Marca", "Lojas", "Contatos"]}/>
                <Nav label="Informaçôes" items={["Formas de Pagamentos", "Trocas e Devoluções", "Cuidados Com o Produto"]}/>
                <Nav label="Conheça" items={["Franquias e Multimarcas", "Trabalhe com a Gente", "Procon-RJ"]}/>
                <NewsletterBox/>
            </div>
        </div>
        <BottomFooter/>
    </Fragment>
)

export default Footer;