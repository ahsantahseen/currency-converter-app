import React from "react";
import "./CurrencyConverterRow.css";

const CurrencyConverterRow = () => {
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
