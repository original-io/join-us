import axios from 'axios'

export const getProducts = (index) => {
    return axios.get("./data.json").then(({data: { products }}) => products)
}