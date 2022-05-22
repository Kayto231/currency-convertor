import {
  ON_CHANGE_CURRENT_CURRENCY1,
  ON_CHANGE_CURRENT_CURRENCY2,
  ON_CHANGE_INPUT1,
  ON_CHANGE_INPUT2,
} from '../consts';

export const onChangeInputValue1 = (string) => ({
  type: ON_CHANGE_INPUT1,
  payload: string,
});

export const onChangeInputValue2 = (string) => ({
  type: ON_CHANGE_INPUT2,
  payload: string,
});
export const onChangeCurrentCurrency1 = (string) => ({
  type: ON_CHANGE_CURRENT_CURRENCY1,
  payload: string,
});
export const onChangeCurrentCurrency2 = (string) => ({
  type: ON_CHANGE_CURRENT_CURRENCY2,
  payload: string,
});

export const onChangeInputValue1Function = ({
  e,
  rates,
  currentCurrency1,
  currentCurrency2,
}) => {
  return (dispatch) => {
    const input =
      +e.target.value * (rates[currentCurrency2] / rates[currentCurrency1]);
    dispatch(onChangeInputValue2(input));

    dispatch(onChangeInputValue1(+e.target.value));
  };
};

export const switchCurrencies = ({
  inputValue1,
  inputValue2,
  currentCurrency1,
  currentCurrency2,
}) => {
  return (dispatch) => {
    console.log(inputValue1, inputValue2, currentCurrency1, currentCurrency2);
    dispatch(onChangeInputValue1(inputValue2));
    dispatch(onChangeInputValue2(inputValue1));
    dispatch(onChangeCurrentCurrency1(currentCurrency2));
    dispatch(onChangeCurrentCurrency2(currentCurrency1));
  };
};

export const onChangeInputValue2Function = ({
  e,
  rates,
  currentCurrency1,
  currentCurrency2,
}) => {
  return (dispatch) => {
    console.log({ e, rates, currentCurrency1, currentCurrency2 });
    dispatch(
      onChangeInputValue1(
        +e.target.value * (rates[currentCurrency1] / rates[currentCurrency2])
      )
    );

    dispatch(onChangeInputValue2(+e.target.value));
  };
};

export const onChangeCurrentValue1 = ({
  currentValue,
  rates,
  currentCurrency1,
  currentCurrency2,
}) => {
  return (dispatch) => {
    dispatch(onChangeInputValue1(currentValue));
    dispatch(
      onChangeInputValue2(
        currentValue * (rates[currentCurrency2] / rates[currentCurrency1])
      )
    );
  };
};

export const onChangeCurrentValue2 = ({
  currentValue,
  rates,
  currentCurrency1,
  currentCurrency2,
}) => {
  return (dispatch) => {
    dispatch(onChangeInputValue2(currentValue));

    dispatch(
      onChangeInputValue1(
        currentValue * (rates[currentCurrency1] / rates[currentCurrency2])
      )
    );
  };
};
