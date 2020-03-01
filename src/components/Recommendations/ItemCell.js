import React from 'react'

//Assets
import ProductImage from '../../assets/prodImage.png'

const ItemCell = ({product, index, imageSizes: { imageWidth, imageMargin } }) => {
    const calculator = (price, discount, times) => {
        const discountedPrice = price - (price * discount / 100)
        const currecyParser = (value) => value.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})
        
        return { 
            discountedPrice: currecyParser(discountedPrice), 
            price: price.toLocaleString("pt-BR",{style: "currency", currency: "BRL"}),
            times, 
            timesPrice: currecyParser(discountedPrice/6)
        }
    }

    const { price } = calculator(parseFloat(product.price), 20, 6)

    return (
        <div style={{marginRight: imageMargin}} className="recommend-cell">
            <img style={{width: imageWidth}} className="recommend-image" src={ProductImage}/>
            <div className="d-flex a-between a-vertical">
                <span className="s-16 c-strong">{price}</span> 
                <div className="d-flex">
                    {product.availableColors.map(({hex}) => <div style={{backgroundColor: hex}} className="recommend-color-cell br-circle"/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemCell;