import styled from "styled-components";

const Ligns = styled.th`
  border: 1px solid;
  border-radius: 12px;
  background-color: lightpink;
`;

function Table({ currencies, amount, fromCurrency }) {
  return (
    <table>
      <thead>
        <tr>
          <Ligns>Devise</Ligns>
          <Ligns>Montant</Ligns>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{fromCurrency.name}</td>
          <td>{amount} {fromCurrency.symbol}</td>
        </tr>
        {currencies
          .filter((c) => c.name !== fromCurrency.name)
          .map((currency) => (
            <tr key={currency.name}>
              <td>{currency.name}</td>
              <td>
                {((amount / fromCurrency.rate) * currency.rate).toFixed(2)}{" "}
                {currency.symbol}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
