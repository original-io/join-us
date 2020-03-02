import React, { createContext, Component } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    state = {
        cartList: [],
        newlyAdded: {}
    }

    addToCart = async (product) => this.setState({...this.state, newlyAdded: product})

    render(){
        return (
            <CartContext.Provider value={{...this.state, addToCart: this.addToCart}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;