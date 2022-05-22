import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_ERROR,
  FETCH_CURRENCIES_SUCCESS,
} from '../consts';

const initialState = {
  ratesList: [],
  rates: [],
  isLoading: true,
  error: '',
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        rates: action.payload.rates,
        ratesList: action.payload.ratesList,
        isLoading: action.payload.isLoading,
      };
    case FETCH_CURRENCIES:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case FETCH_CURRENCIES_ERROR:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
