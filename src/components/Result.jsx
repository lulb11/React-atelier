import styled from "styled-components";

const Resultat = styled.h2`
  font-family: Lora;
`;

function Result({ amount, fromCurrency, toCurrency }) {
  return (
    <div>
      <Resultat>
        Résultat : {((amount / fromCurrency.rate) * toCurrency.rate).toFixed(2)} {toCurrency.symbol}
      </Resultat>
    </div>
  );
}

export default Result;
