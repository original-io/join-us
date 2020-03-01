import React from 'react';

//Components
import Header from './components/Header'
import Product from './components/Product'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'

const App = () => (
    <div className='App'>
      <Header/>
      <Product/>
      <Recommendations/>
      <Footer/>
    </div>
)

export default App;