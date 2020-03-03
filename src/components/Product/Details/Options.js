import React, { Fragment, useState } from 'react';

const Options = ({product}) => {
    const [currentColor, setColor] = useState({hex: product.availableColors[0].hex, name: product.availableColors[0].name})
    const [currentSize, setSize] = useState(product.availableSizes[0])

    return (
        <Fragment>
            <div className="mar-t-40">
                <p className="s-14 c-strong mar-b-8">Cor: <span className="mar-l-6 c-blue">({currentColor.name})</span></p>
                <div className="d-flex">
                    {product.availableColors.map(({name, hex}, index) => <div onClick={() => setColor({name, hex})} style={{backgroundColor: hex}} className={`color-item br-circle clickable ${currentColor.hex === hex ? "active" : "inactive"}`}/>)}
                </div>
            </div>

            <div className="cw-fit mar-t-6 mar-b-53">
                <div className="d-flex a-between a-vertical mar-b-8">
                    <p className="s-14 c-strong mar-r-20">Tamanho: <span className="mar-l-6 c-blue">({currentSize})</span></p>
                    <a href="#" className="c-orange td-underline s-14 mar-0">Guia de medidas</a>
                </div>
                <div className="d-flex">
                    {product.availableSizes.map((i, index) => <div onClick={() => setSize(i)} className={`clickable size-item br-circle d-flex a-center s-14 c-dark-blue mar-r-3 ${currentSize === i ? "active" : "inactive"}`}>{i}</div>)}
                </div>
            </div>
        </Fragment>
    )
}

export default Options;