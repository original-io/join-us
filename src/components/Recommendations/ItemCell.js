import React from 'react'

//Assets
import Plus from '../../assets/plus.png'

//Partials
import { calculator } from '../../partials'

const ItemCell = ({product: { id, availableColors, price, images }, imageSizes: { imageWidth, imageMargin } }) => {
    const itemPrice = calculator(parseFloat(price), 20, 6).price

    return (
        <div style={{marginRight: imageMargin}} className="recommend-cell pos-relative">
            <img className="recommend-plus-sign clickable pos-absolute" src={Plus}/>
            <a href={`?id=${id}`}>
                <img style={{width: imageWidth}} className="recommend-image" src={images[0]}/>
            </a>
            <div className="d-flex a-between a-vertical">
                <span className="s-16 c-strong">{itemPrice}</span> 
                <div className="d-flex">
                    {availableColors.map(({hex}) => <div style={{backgroundColor: hex}} className="recommend-color-cell br-circle"/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemCell;