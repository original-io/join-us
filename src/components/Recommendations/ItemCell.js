import React from 'react'

//Assets
import Plus from '../../assets/plus.png'

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
        <div style={{marginRight: imageMargin}} className="recommend-cell pos-relative">
            <img className="recommend-plus-sign clickable pos-absolute" src={Plus}/>
            <a href={`?id=${id}`}>
                <img style={{width: imageWidth}} className="recommend-image" src={images[0]}/>
            </a>
            <div className="d-flex a-between a-vertical">
                <span className="s-16 c-strong">{totalPrice}</span> 
                <div className="d-flex">
                    {availableColors.map(({hex}) => <div style={{backgroundColor: hex}} className="recommend-color-cell br-circle"/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemCell;