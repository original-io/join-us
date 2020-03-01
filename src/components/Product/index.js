import React from 'react';

import ImageNavigation from './ImageNavigation'
import ProductDetails from './ProductDetails'

const ProductSection = () => (
    <div className='ProductSection pad-h-40'>
        <p className="s-12 c-light mar-0 mar-t-4 mar-b-16 pad-v-6">
            <a className="c-light" href="#" >Home</a> 
            <span className="mar-h-6">/</span>
            <a href="#" className="c-light w-bold">Sapatos</a>
        </p>
        <div className="d-flex">
            <ImageNavigation/>
            <ProductDetails/>
        </div>
    </div>
)

export default ProductSection;