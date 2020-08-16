import React from "react";
import "./CurrencyConverterRow.css";

const CurrencyConverterRow = (props) => {
  console.log(props.options);
  return (
    <div>
      <input className="input" type="number"></input>
      <select className="select">
        {props.ops.map((Option) => (
          <option key={Option} value={Option}>
            {Option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyConverterRow;
