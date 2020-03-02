export const calculator = (price, discount, times) => {
    const discountedPrice = price - (price * discount / 100)
    const currecyParser = (value) => value.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})
    
    return { 
        discountedPriceNum: discountedPrice,
        discountedPrice: currecyParser(discountedPrice), 
        price: currecyParser(price),
        times, 
        timesPrice: currecyParser(discountedPrice/6)
    }
}