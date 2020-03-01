import React, { useState } from 'react';

//Components
import ItemCell from './ItemCell'
import Navigator from './Navigator'

const Recommendations = () => {
    const [currentPage, setPage] = useState({translation: 0, page: 1})
    const imageWidth = 290.22, imageMargin = 13, noOfItems = 40;
    const containerSize = imageWidth * 4 + (imageMargin * 3);

    const product = {
        name: "Rasteira Tira Dedo",
        id1: "RT 0568",
        id2: "03.07.0653",
        price: "69.00",
        description: "Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.",
        availableSizes: [...Array(10)].map((i, index) => 33 + index),
        availableColors: [
            {
                name: "Fucsia",
                hex: "#A9095E"
            },
            {
                name: "Azul",
                hex: "#6B85C1"
            },
            {
                name: "Marrom",
                hex: "#A14830"
            },
            {
                name: "Preto",
                hex: "#000000"
            },
        ]
    }

    const navTranslation = { 
        transform: `translateX(-${currentPage.translation}px)` 
    }

    const navigate = (forward) => {
        const maxPages = Math.ceil(noOfItems/4);
        if(forward){
            return setPage(currentPage.page === maxPages ?
                    { page: 1, translation: 0 }
                :
                    { page: currentPage.page + 1, translation: currentPage.translation + containerSize + imageMargin}
            )
        }
        return setPage(currentPage.page === 1 ?
                { page: maxPages, translation: containerSize * (maxPages - 1) + (imageMargin * (maxPages - 1)) }
            :
                { page: currentPage.page - 1, translation: currentPage.translation - containerSize - imageMargin}
        )
    }

    //&#43;
    return (
        <div className='Recommendations d-flex fdir-column a-vertical pad-h-40'>
            <p className="c-orange s-26 txa-center uppercase font-gotham mar-t-104 mar-b-18 mar-0">Quem viu viu também</p>
            <div style={{width: containerSize}} className="cw-max-view overflow-x-hide">
                <div style={navTranslation} className="product-recommend-container cw-fit mar-h-cen d-flex">
                    {[...Array(noOfItems)].map((i, index) => <ItemCell key={index} index={index} product={product} imageSizes={{imageMargin, imageWidth}}/>)}
                </div>
            </div>

            <Navigator currentPage={currentPage.page} noOfItems={Math.ceil(noOfItems/4)} navigate={navigate}/>
        </div>
    )
}

export default Recommendations;