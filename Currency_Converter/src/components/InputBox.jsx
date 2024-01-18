import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="d-flex flex-column bg-light p-3 text-black gap-3 rounded">
      <div className="d-flex justify-content-between">
        <label htmlFor={amountInputId}>{label}</label>
        <span>Currency Type</span>
      </div>
      <div className="d-flex gap-2">
        <input 
          className="border-0 bg-transparent"
          id={amountInputId}
          type="number" 
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
        <select 
        onChange={(e) => onCurrencyChange(e.target.value)}
        value={selectCurrency}
        disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
