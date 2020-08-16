import React from "react";
import "./App.css";
import CurrencyConverterRow from "../Components/CurrencyConRow/CurrencyConverterRow";

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyConverterRow />
      =
      <CurrencyConverterRow />
    </div>
  );
}

export default App;
