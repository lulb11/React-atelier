function Input({ currencies, handleInput, amount, handleFrom, handleTo }) {
  return (
    <section>
      <div>
        <label htmlFor="amount">Montant: </label>
        <input
          id="amount"
          name="amount"
          type="number"
          required
          value={amount}
          onChange={handleInput}
        ></input>
      </div>
      <div>
        <label htmlFor="from-currency">De : </label>
        <select
          id="from-currency"
          name="from-currency"
          required
          onChange={handleFrom}
        >
          {currencies.map((currency, index) => (
            <option key={index} value={index}>
              {currency.flag} {currency.name} {currency.symbol}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="to-currency">Vers : </label>
        <select
          id="to-currency"
          name="from-currency"
          required
          onChange={handleTo}
        >
          {currencies.map((currency, index) => (
            <option key={index} value={index}>
              {currency.flag} {currency.name} {currency.symbol}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default Input;
