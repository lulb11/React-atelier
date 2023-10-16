import "./App.css";
import Input from "./components/Input";
import Result from "./components/Result";
import Table from "./components/Table";
import { useState } from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 40px;
  font-family: Times New Roman;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const currencies = [
  {
    name: "Dollar US",
    symbol: "$",
    flag: "🇺🇸",
    rate: 1,
  },
  {
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺",
    rate: 0.94934,
  },
  {
    name: "Livre britannique",
    symbol: "£",
    flag: "🇬🇧",
    rate: 0.82277,
  },
  {
    name: "Yen japonais",
    symbol: "¥",
    flag: "🇯🇵",
    rate: 149.5,
  },
  {
    name: "Dollar canadien",
    symbol: "CAN $",
    flag: "🇨🇦",
    rate: 1.3644,
  },
];

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);

  const handleInput = (event) => {
    setAmount(event.target.value);
  };

  const handleFrom = (event) => {
    setFromCurrency(currencies[event.target.value]);
  };

  const handleTo = (event) => {
    setToCurrency(currencies[event.target.value]);
  };

  const switchButton = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Container>
      <Title>Convertis ton argent en ne t'amusant pas eheh 🙃</Title>
      <Input
        switchButton={switchButton}
        currencies={currencies}
        handleInput={handleInput}
        amount={amount}
        handleFrom={handleFrom}
        handleTo={handleTo}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
      <Result
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />

      <Table
        currencies={currencies}
        amount={amount}
        fromCurrency={fromCurrency}
      />
    </Container>
  );
}

export default App;
