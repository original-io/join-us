import React from 'react';

import ImageNavigation from './ImageNavigation'
import ProductDetails from './ProductDetails'

const ProductSection = () => (
    <div className='ProductSection d-flex pad-h-40'>
        <ImageNavigation/>
        <ProductDetails/>
    </div>
)

export default ProductSection;