import React from "react";
import "./CurrencyConverterRow.css";

const CurrencyConverterRow = (props) => {
  return (
    <div>
      <input
        className="input"
        type="number"
        value={props.Amount}
        onChange={props.AmountOnChangeHandler}
      ></input>
      <select className="select" onChange={props.OptionsonChangeHandler}>
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
