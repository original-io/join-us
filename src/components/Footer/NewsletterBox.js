import React from 'react';

//Components
import Input from './Input'
import { ButtonMin } from '../Buttons'

const NewsletterBox = () => (
    <div className='NewsletterBox br-circle pos-absolute d-flex fdir-column a-center'>
        <div>
            <p className="uppercase font-gotham-bold c-strong s-16 txa-left">Assine nossa news</p>
            <Input type="text" style={{marginTop: 30}} width={216} label="Nome"/>
            <Input type="email" style={{marginTop: 27}} width={216} label="E-mail"/>
            <ButtonMin style={{margin: "27px auto 0 auto"}} label="Enviar" color="#DE8F75" func={() => null}/>
        </div>
    </div>
)

export default NewsletterBox;