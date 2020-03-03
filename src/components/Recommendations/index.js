import React, { useState, useContext, useEffect } from 'react';

//Components
import ItemCell from './ItemCell'
import Navigator from './Navigator'

//Context
import { ProductContext } from '../../contexts/ProductContext'

const Recommendations = () => {
    const { products } = useContext(ProductContext);
    const productsCopy = [products, products, products, products].flat();
    const [currentPage, setPage] = useState({translation: 0, page: 1});
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const imageWidth = 290.22, imageMargin = 13, noOfItems = productsCopy.length;
    const maxItemsPerView = Math.floor(windowSize/imageWidth)
    const containerSize = imageWidth * maxItemsPerView + (imageMargin * (maxItemsPerView - 1));

    const navTranslation = { 
        transform: `translateX(-${currentPage.translation}px)` 
    }

    const navigate = (forward) => {
        const maxPages = Math.ceil(noOfItems/maxItemsPerView);
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

    useEffect(() => window.addEventListener("resize", ({target: { innerWidth }}) => setWindowSize(innerWidth)));

    //&#43;
    return (
        <div className='Recommendations d-flex fdir-column a-vertical pad-h-40'>
            <p className="c-orange s-26 txa-center uppercase font-gotham mar-t-104 mar-b-18 mar-0">Quem viu viu também</p>
            <div style={{width: containerSize}} className="cw-max-view overflow-x-hide">
                <div style={navTranslation} className="product-recommend-container cw-fit mar-h-cen d-flex">
                    {productsCopy.map((product, index) => <ItemCell key={index} product={product} imageSizes={{imageMargin, imageWidth}}/>)}
                </div>
            </div>

            <Navigator currentPage={currentPage.page} noOfItems={Math.ceil(noOfItems/maxItemsPerView)} navigate={navigate}/>
        </div>
    )
}

export default Recommendations;