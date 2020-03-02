import axios from 'axios'

export const getProducts = () => {
    return axios.get("./data.json").then(({data: { products }}) => products)
}

export const getCategories = () => {
    return axios.get("./data.json").then(({data: { categories }}) => categories)
}