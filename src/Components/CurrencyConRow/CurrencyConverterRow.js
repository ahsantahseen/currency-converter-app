import React, { useEffect, useState } from "react";
import "./CurrencyConverterRow.css";
import axios from "axios";

const CurrencyConverterRow = () => {
  const [currencyOptions, setcurrencyOptions] = useState();
  console.log(currencyOptions);

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then((response) => {
      setcurrencyOptions([response.data, ...Object.keys(response.data.rates)]);
    });
  }, []);

  return (
    <div>
      <input className="input" type="number"></input>
      <select>
        <option className="select" value="H1">
          H1
        </option>
      </select>
    </div>
  );
};

export default CurrencyConverterRow;
