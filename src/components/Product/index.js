import React, { useContext, Fragment } from 'react';
import queryString from 'query-string'

//Context
import { ProductContext } from '../../contexts/ProductContext'

//Components
import ImageNavigation from './ImageNavigation'
import ProductDetails from './ProductDetails'
import CartModal from '../Modals/CartModal'

const ProductSection = () => {
    const { products } = useContext(ProductContext);
    const { id } = queryString.parse(window.location.search); 

    return  (
        <div className='ProductSection pos-relative pad-h-40'>
            <CartModal/>
            <p className="s-12 c-light mar-0 mar-t-4 mar-b-16 pad-v-6">
                <a className="c-light" href="#" >Home</a> 
                <span className="mar-h-6">/</span>
                <a href="#" className="c-light w-bold">Sapatos</a>
            </p>
            <div className="product-container d-flex">
                {
                    products.length > 0 ?
                        <Fragment>
                            <ImageNavigation product={products[id ? id : 0]}/>
                            <ProductDetails product={products[id ? id : 0]}/>
                        </Fragment>
                    :
                        null
                }
            </div>
        </div>
    )
}

export default ProductSection;