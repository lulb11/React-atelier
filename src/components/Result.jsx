function Result({amount, fromCurrency, toCurrency}) {
    
    
    return(
        <div>
            <h2>Résultat : {(amount / fromCurrency.rate) * toCurrency.rate}</h2>
        </div>
    )
}

export default Result;