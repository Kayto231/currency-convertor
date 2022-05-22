import React, { useState } from 'react';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  onChangeInputValue1Function,
  onChangeCurrentCurrency1,
  onChangeCurrentCurrency2,
  onChangeInputValue2Function,
  onChangeCurrentValue1,
  onChangeCurrentValue2,
  switchCurrencies,
} from '../../redux/actions/inputAcions';
import switchButton from '../../assets/images/swap-icon.svg';
import './CurrencyLayout_style.scss';

const CurrencyLayout = ({ isFinancialShown }) => {
  const { rates } = useSelector((state) => state.rate);
  const { inputValue1, inputValue2, currentCurrency1, currentCurrency2 } =
    useSelector((state) => state.input);
  const dispatch = useDispatch();

  function handleChangeValue1(e) {
    if (isNaN(+e.target.value)) return;
    dispatch(
      onChangeInputValue1Function({
        e,
        rates,
        currentCurrency1,
        currentCurrency2,
      })
    );
  }
  function handleChangeCurrency1(e) {
    dispatch(onChangeCurrentCurrency1(e.target.value));
    dispatch(
      onChangeCurrentValue1({
        currentValue: inputValue1,
        rates,
        currentCurrency1: e.target.value,
        currentCurrency2,
      })
    );
  }
  function handleChangeValue2(e) {
    if (isNaN(+e.target.value)) return;
    dispatch(
      onChangeInputValue2Function({
        e,
        rates,
        currentCurrency1,
        currentCurrency2,
      })
    );
  }
  function handleChangeCurrency2(e) {
    dispatch(onChangeCurrentCurrency2(e.target.value));

    dispatch(
      onChangeCurrentValue2({
        currentValue: inputValue2,
        rates,
        currentCurrency1,
        currentCurrency2: e.target.value,
      })
    );
  }

  function handleSwitchCurrencies() {
    console.log();
    dispatch(
      switchCurrencies({
        inputValue1,
        inputValue2,
        currentCurrency1,
        currentCurrency2,
      })
    );
  }

  return (
    <div
      className={
        isFinancialShown
          ? 'currencylayout__container display__none'
          : 'currencylayout__container'
      }
    >
      <div className="currencylayout__text d-column">
        <span>Choose your currency</span>
        <span className="text">And see what it will be exchanged for</span>
      </div>
      <CurrencyInput
        inputValue={inputValue1}
        currentCurrency={currentCurrency1}
        onChangeCurrentCurrency={(e) => handleChangeCurrency1(e)}
        onChangeInputValue={handleChangeValue1}
      />
      <CurrencyInput
        inputValue={inputValue2}
        currentCurrency={currentCurrency2}
        onChangeCurrentCurrency={(e) => handleChangeCurrency2(e)}
        onChangeInputValue={(e) => handleChangeValue2(e)}
      />
      <img
        className="switch__button"
        onClick={handleSwitchCurrencies}
        src={switchButton}
        alt="switchButton"
      />
      <div className="summary__text">
        {`You give ${Math.round(
          inputValue1
        )} in ${currentCurrency1} and get ${Math.round(
          inputValue2
        )} in ${currentCurrency2}`}
      </div>
      <span className="description d-flex">
        What is currency converter? It is essentially the price measure of one
        currency against another. As the rate changes, one country's money can
        become weaker or stronger against other currencies. For example, if the
        euro/U.S. dollar conversion rate is 1.25, that means one euro can equate
        to $1.25 in American currency.
      </span>
    </div>
  );
};

export default CurrencyLayout;
