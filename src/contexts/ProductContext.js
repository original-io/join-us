import React, { createContext, Component } from 'react';

//Client
import { getProducts } from '../client'

export const ProductContext = createContext();

class ProductContextProvider extends Component {
    state = {
        products: []
    }

    componentDidMount = () => getProducts().then(products => this.setState({products}))

    render(){
        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export default ProductContextProvider;