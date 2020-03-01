import React from 'react'

const ItemCell = ({product: { id, availableColors, price, images }, imageSizes: { imageWidth, imageMargin } }) => {
    const calculator = (price, discount, times) => {
        const discountedPrice = price - (price * discount / 100)
        const currecyParser = (value) => value.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})
        
        return { 
            discountedPrice: currecyParser(discountedPrice), 
            totalPrice: price.toLocaleString("pt-BR",{style: "currency", currency: "BRL"}),
            times, 
            timesPrice: currecyParser(discountedPrice/6)
        }
    }

    const { totalPrice } = calculator(parseFloat(price), 20, 6)

    return (
        <a href={`?id=${id}`} style={{marginRight: imageMargin}} className="recommend-cell">
            <img style={{width: imageWidth}} className="recommend-image" src={images[0]}/>
            <div className="d-flex a-between a-vertical">
                <span className="s-16 c-strong">{totalPrice}</span> 
                <div className="d-flex">
                    {availableColors.map(({hex}) => <div style={{backgroundColor: hex}} className="recommend-color-cell br-circle"/>)}
                </div>
            </div>
        </a>
    )
}

export default ItemCell;