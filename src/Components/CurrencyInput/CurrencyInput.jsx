import React from 'react';
import { useSelector } from 'react-redux';
import './CurrencyInput_Style.scss';

const CurrencyInput = ({
  inputValue,
  onChangeInputValue,
  currentCurrency,
  onChangeCurrentCurrency,
}) => {
  const { ratesList } = useSelector((state) => state.rate);
  function selectText(e) {
    e.target.select();
  }
  return (
    <div className="input__block d-flex">
      <input
        onClick={selectText}
        className="input"
        type="number"
        value={+inputValue?.toFixed(2)}
        placeholder="Type the value"
        onChange={(e) => onChangeInputValue(e)}
      />
      <select
        className="select d-flex justify-center align-center"
        value={currentCurrency}
        onChange={onChangeCurrentCurrency}
      >
        {ratesList.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
