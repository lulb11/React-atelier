import "./App.css";
import Input from "./components/Input";
import Result from "./components/Result";
import NavTest from "./components/nav";
import { useState } from "react";

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
  const [toCurrency, setToCurrency] = useState(currencies[0]);

  const handleInput = (event) => {
    setAmount(event.target.value);
  };

  const handleFrom = (event) => {
    setFromCurrency(currencies[event.target.value]);
  };

  const handleTo = (event) => {
    setToCurrency(currencies[event.target.value]);
  };

  return (
    <div>
      <h3>Convertis ton argent en t'amusant 🙃</h3>
      <Input
        currencies={currencies}
        handleInput={handleInput}
        amount={amount}
        handleFrom={handleFrom}
        handleTo={handleTo}
      />
      <Result
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </div>
  );
}

export default App;
