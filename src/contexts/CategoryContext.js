import React, { createContext, Component } from 'react';

//Client
import { getCategories } from '../client'

export const CategoryContext = createContext();

class CategoryContextProvider extends Component {
    state = {
        navItems: []
    }

    componentDidMount = () => getCategories().then(navItems => this.setState({navItems}))

    render(){
        return (
            <CategoryContext.Provider value={{...this.state}}>
                {this.props.children}
            </CategoryContext.Provider>
        )
    }
}

export default CategoryContextProvider;