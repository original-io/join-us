import React, { createContext, Component } from 'react';

export const CartContext = createContext();

const storedCart = JSON.parse(localStorage.getItem("cart")) || []

class CartContextProvider extends Component {
    state = {
        cartList: storedCart,
        newlyAdded: {}
    }

    removeItem = (productId) => {
        const cart = this.state.cartList.filter(({id}) => id !== productId);

        localStorage.setItem("cart", JSON.stringify(cart))
        this.setState({...this.state, cartList: cart})
    }

    changeQuantity = (op, productId) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const existingIndex = cart.findIndex(({id}) => id === productId);
        const qty = cart[existingIndex].qty;

        if(!(qty === 1 && op === "sub")) cart[existingIndex].qty += op === "add" ? +1 : -1

        localStorage.setItem("cart", JSON.stringify(cart))
        this.setState({...this.state, cartList: cart})
    }

    addToCart = async (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingIndex = cart.findIndex(({id}) => id === product.id);

        if(existingIndex !== -1){
            cart[existingIndex].qty += 1; //Add one of the same product 
        }else{
            cart.push({...product, qty: 1}) //Insert item at the cart with quantity as 1 
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        this.setState({...this.state, cartList: cart, newlyAdded: product})
    }

    render(){
        return (
            <CartContext.Provider value={{...this.state, removeItem: this.removeItem, changeQuantity: this.changeQuantity, addToCart: this.addToCart}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;