import React, { useState, useEffect } from "react";
import "./App.css";
import CurrencyConverterRow from "../Components/CurrencyConRow/CurrencyConverterRow";
import axios from "axios";

function App() {
  const [currencyOptions, setcurrencyOptions] = useState([]);
  console.log(currencyOptions);

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then((response) => {
      setcurrencyOptions([
        response.data.base,
        ...Object.keys(response.data.rates),
      ]);
    });
  }, []);
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyConverterRow ops={currencyOptions} />
      <p className="equals">=</p>
      <CurrencyConverterRow ops={currencyOptions} />
    </div>
  );
}

export default App;
