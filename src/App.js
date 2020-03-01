import React from 'react';

//Components
import Header from './components/Header'
import Product from './components/Product'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'

//Context
import ProductContextProvider from './contexts/ProductContext'

const App = () => (
    <ProductContextProvider>
      <div className='App'>
        <Header/>
        <Product/>
        <Recommendations/>
        <Footer/>
      </div>
    </ProductContextProvider>
)

export default App;