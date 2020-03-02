import React from 'react';

//Components
import { ButtonAnimated } from '../Buttons'

//Assets
import Banner from '../../assets/banner.png'

export const CategoryModal = ({name, subcategories}) => {
    const labelImage = require(`../../assets/${name}.png`);

    return (
        <div className='CategoryModal d-flex a-vertical flex-end cw-max-view pos-absolute'>
            <div className="main-container d-flex a-vertical flex-end">
                <div className="image-label-ctn d-flex fdir-column">
                    <img src={labelImage}/>
                    <ButtonAnimated style={{marginTop: 25}} label="Ver Todas"/>
                </div>
                <div className="sub-category-list d-flex a-vertical">
                    <div className="vertical-bar"/>
                    <ul className="pad-r-22">
                        {
                            subcategories.map((sub) => <li className="lh-max"><a className="c-orange s-14" href="#">{sub}</a></li>)
                        }
                    </ul>
                </div>
                <img className="mar-r-36" src={Banner}/>
            </div>
        </div>
    )
}

export const ShoesModal = ({subcategories}) => {

    return (
        <div className='CategoryModal cw-max-view pos-absolute d-flex a-center'>
            <div className="main-container shoes d-flex">
                {
                    subcategories.map((item, index) => {
                        const image = require(`../../assets/shoes/${index}.png`)
                        return (
                            <div className="category-container d-flex a-center fdir-column">
                                <img className="mar-b-14" src={image}/>
                                <p className="txa-center s-14 c-orange">{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}