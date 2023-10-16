import styled from "styled-components";

const SectionStyle = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 12px;
  padding: 25px;
`;
const InputStyle = styled.input`
  border-radius: 50px;
  padding: 5px;
`;

const LabelStyle = styled.label`
  font-size: 18px;
  margin: 0 5px 0 15px;
  font-family: "Halant", sans-serif;
`;

const SelectStyle = styled.select`
  border-radius: 50px;
  padding: 5px;
  background-color: white;
`;

const SwitchStyle = styled.button`
align-items: center;
margin: 0 5px 0 15px;
`;

function Input({
  currencies,
  handleInput,
  amount,
  handleFrom,
  handleTo,
  switchButton,
  fromCurrency,
  toCurrency,
}) {
  return (
    <SectionStyle>
      <div>
        <LabelStyle htmlFor="amount">Le montant à écrire ici : </LabelStyle>
        <InputStyle
          id="amount"
          name="amount"
          type="number"
          required
          value={amount}
          onChange={handleInput}
          min="0"
        ></InputStyle>
      </div>
      <div>
        <LabelStyle htmlFor="from-currency">De : </LabelStyle>
        <SelectStyle
          id="from-currency"
          name="from-currency"
          required
          onChange={handleFrom}
          value={currencies.indexOf(fromCurrency)}
        >
          {currencies.map((currency, index) => (
            <option key={index} value={index}>
              {currency.flag} {currency.name} {currency.symbol}
            </option>
          ))}
        </SelectStyle>
      </div>
      <div>
        <SwitchStyle onClick={switchButton}>
          <img src="./../../public/switch.svg" width="20px" height="20px" />
        </SwitchStyle>
      </div>
      <div>
        <LabelStyle htmlFor="to-currency">Vers : </LabelStyle>
        <SelectStyle
          id="to-currency"
          name="from-currency"
          required
          onChange={handleTo}
          value={currencies.indexOf(toCurrency)}
        >
          {currencies.map((currency, index) => (
            <option key={index} value={index}>
              {currency.flag} {currency.name} {currency.symbol}
            </option>
          ))}
        </SelectStyle>
      </div>
    </SectionStyle>
  );
}

export default Input;
