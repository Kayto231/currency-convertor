import {
  ON_CHANGE_CURRENT_CURRENCY1,
  ON_CHANGE_CURRENT_CURRENCY2,
  ON_CHANGE_INPUT1,
  ON_CHANGE_INPUT2,
} from '../consts';

const initialState = {
  inputValue1: 0,
  inputValue2: 0,
  currentCurrency1: 'EUR',
  currentCurrency2: 'UAH',
};

export const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_INPUT1:
      return {
        ...state,
        inputValue1: action.payload,
      };
    case ON_CHANGE_INPUT2:
      return {
        ...state,
        inputValue2: action.payload,
      };
    case ON_CHANGE_CURRENT_CURRENCY1:
      return {
        ...state,
        currentCurrency1: action.payload,
      };
    case ON_CHANGE_CURRENT_CURRENCY2:
      return {
        ...state,
        currentCurrency2: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
