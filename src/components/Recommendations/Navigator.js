import React from 'react';

//Assets
import Arrow from '../../assets/circle-arrow.png'

const Navigator = ({navigate, currentPage, noOfItems}) => (
    <div className="d-flex a-center mar-t-24">
        <img onClick={() => navigate()} className="clickable rotate-180" src={Arrow}/>
            <span className="s-14 mar-h-26 c-dark-blue">{currentPage} de {noOfItems}</span>
        <img onClick={() => navigate(true)} className="clickable" src={Arrow}/>
    </div>
)

export default Navigator;