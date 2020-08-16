import React, { useState, useEffect } from "react";
import "./App.css";
import CurrencyConverterRow from "../Components/CurrencyConRow/CurrencyConverterRow";
import axios from "axios";

function App() {
  const [currencyOptions, setcurrencyOptions] = useState([]);
  const [currentCurrency, setcurrentCurrency] = useState();
  const [convertedCurrency, setconvertedCurrency] = useState();
  const [exchangeRate, setexchangeRate] = useState();
  const [amount, setamount] = useState(1);
  const [amountInFromCurrency, setamountInFromCurrency] = useState(true);

  let currentAmount, convertedAmount;
  if (amountInFromCurrency) {
    currentAmount = amount;
    convertedAmount = amount * exchangeRate;
  } else {
    convertedAmount = amount;
    currentAmount = amount / exchangeRate;
  }

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then((response) => {
      const firstCurrencyOption = Object.keys(response.data.rates)[0];
      setcurrencyOptions([
        response.data.base,
        ...Object.keys(response.data.rates),
      ]);
      setcurrentCurrency(response.data.base);
      setconvertedCurrency(firstCurrencyOption);
      setexchangeRate(response.data.rates[firstCurrencyOption]);
    });
  }, []);
  const currentAmountHandler = (e) => {
    setamount(e.target.value);
    setamountInFromCurrency(true);
  };
  const convertedAmountHandler = (e) => {
    setamount(e.target.value);
    setamountInFromCurrency(false);
  };

  useEffect(() => {
    if (currentCurrency != null && convertedCurrency != null) {
      axios
        .get(
          `https://api.exchangeratesapi.io/latest?base=${currentCurrency}&symbols=${convertedCurrency}`
        )
        .then((response) =>
          setexchangeRate(response.data.rates[convertedCurrency])
        );
    }
  }, [currentCurrency, convertedCurrency]);
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      Current
      <CurrencyConverterRow
        ops={currencyOptions}
        selectedCurrency={currentCurrency}
        OptionsonChangeHandler={(e) => setcurrentCurrency(e.target.value)}
        Amount={currentAmount}
        AmountOnChangeHandler={currentAmountHandler}
      />
      <p className="equals">=</p>
      Converted
      <CurrencyConverterRow
        ops={currencyOptions}
        selectedCurrency={convertedCurrency}
        OptionsonChangeHandler={(e) => setconvertedCurrency(e.target.value)}
        Amount={convertedAmount}
        AmountOnChangeHandler={convertedAmountHandler}
      />
    </div>
  );
}

export default App;
