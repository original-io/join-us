import React, { useState } from 'react';

//Components
import { ButtonLarge } from '../Buttons' 

const ProductDetails = () => {
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
    
    const product = {
        name: "Rasteira Tira Dedo",
        id1: "RT 0568",
        id2: "03.07.0653",
        price: "69.00",
        description: "Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.",
        availableSizes: [...Array(10)].map((i, index) => 33 + index),
        availableColors: [
            {
                name: "Fucsia",
                hex: "#A9095E"
            },
            {
                name: "Azul",
                hex: "#6B85C1"
            },
            {
                name: "Marrom",
                hex: "#A14830"
            },
            {
                name: "Preto",
                hex: "#000000"
            },
        ]
    }

    const { discountedPrice, price, times, timesPrice } = calculator(parseFloat(product.price), 20, 6)
    const [currentColor, setColor] = useState({hex: product.availableColors[0].hex, name: product.availableColors[0].name})
    const [currentSize, setSize] = useState(product.availableSizes[0])

    return (
        <div className='ProductDetails pad-20 ch-fit'>
            <div>
                <span className="font-gotham-bold c-strong s-26">{product.name.toUpperCase()}</span>
                <p className="s-14 c-strong mar-0">{product.id1} | {product.id2}</p>
                <p className="s-14 c-orange mar-t-20 mar-0">{price} | <span className="font-gotham-bold mar-l-6 c-black s-20">{discountedPrice}</span></p>
                <p className="c-light2 mar-0 s-12">Ou {times}x de {timesPrice}</p>
            </div>

            <div className="mar-t-40">
                <p className="s-14 c-strong mar-b-8">Cor: <span className="mar-l-6 c-blue">({currentColor.name})</span></p>
                <div className="d-flex">
                    {product.availableColors.map(({name, hex}, index) => <div onClick={() => setColor({name, hex})} style={{backgroundColor: hex}} className={`color-item br-circle clickable ${currentColor.hex === hex ? "active" : "inactive"}`}/>)}
                </div>
            </div>

            <div className="cw-fit mar-t-6 mar-b-53">
                <div className="d-flex a-between">
                    <p className="s-14 c-strong mar-b-8">Tamanho: <span className="mar-l-6 c-blue">({currentSize})</span></p>
                    <a href="#" className="c-orange td-underline s-14">Guia de medidas</a>
                </div>
                <div className="d-flex">
                    {product.availableSizes.map((i, index) => <div onClick={() => setSize(i)} className={`clickable size-item br-circle d-flex a-center s-14 c-dark-blue mar-r-3 ${currentSize === i ? "active" : "inactive"}`}>{i}</div>)}
                </div>
            </div>

            <ButtonLarge label="Adicionar à sacola" color="#32917B" height={60} func={() => null}/>
            <p className="c-strong s-14 lh-high mar-0 mar-t-16">{product.description}</p>
        </div>
    )
}

export default ProductDetails;