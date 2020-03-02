import React, { createContext, Component } from 'react';

export const ModalContext = createContext();

class ModalContextProvider extends Component {
    state = {
        addToCartStatus: false,
        cartStatus: false,
    }

    toggleModal = async (stateName) => this.setState({...this.state, [stateName]: !this.state[stateName]})

    render(){
        return (
            <ModalContext.Provider value={{...this.state, toggleModal: this.toggleModal}}>
                {this.props.children}
            </ModalContext.Provider>
        )
    }
}

export default ModalContextProvider;