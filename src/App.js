import React from 'react';

//Components
import Header from './components/Header'
import Product from './components/Product'
import Recommendations from './components/Recommendations'

const App = () => (
    <div className='App'>
      <Header/>
      <Product/>
      <Recommendations/>
    </div>
)

export default App;