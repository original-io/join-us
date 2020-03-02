import React from 'react';

//Components
import Header from './components/Header'
import Product from './components/Product'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'
import AddedCartModal from './components/Modals/AddedCartModal'

//Context
import ProductContextProvider from './contexts/ProductContext'
import ModalContextProvider from './contexts/ModalContext'
import CartContextProvider from './contexts/CartContext'

const App = () => (
    <ModalContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <div className='App'>
            <Header/>
            <Product/>
            <Recommendations/>
            <Footer/>
            <AddedCartModal/>
          </div>
        </ProductContextProvider>
      </CartContextProvider>
    </ModalContextProvider>  
)

export default App;