import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white p-4 rounded-xl shadow-md text-base flex flex-col md:flex-row gap-4 md:gap-8 ${className}`}
    >
      {/* Amount Input */}
      <div className="md:w-1/2 w-full">
        <label htmlFor={amountInputId} className="text-gray-600 font-medium block mb-1">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
        />
      </div>

      {/* Currency Select */}
      <div className="md:w-1/2 w-full text-left md:text-right">
        <label className="text-gray-600 font-medium block mb-1">
          Currency Type
        </label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-60"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;