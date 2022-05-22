import { FETCH_NBU_CURRENCIES, FETCH_NBU_CURRENCIES_ERROR } from '../consts';

const initialState = {
  nbuRates: [],
  isLoading: true,
  error: '',
};

export const nbuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBU_CURRENCIES:
      return {
        ...state,
        nbuRates: action.payload.nbuRates,
        isLoading: action.payload.isLoading,
      };
    case FETCH_NBU_CURRENCIES_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: action.payload.isLoading,
      };
    default:
      return {
        ...state,
      };
  }
};
