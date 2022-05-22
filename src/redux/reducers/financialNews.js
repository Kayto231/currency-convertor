import { FETCH_FINANCIAL_NEWS, FETCH_FINANCIAL_NEWS_ERROR } from '../consts';

const initialState = {
  financialNews: [],
  isLoading: true,
  error: '',
};

export const financialNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FINANCIAL_NEWS:
      return {
        ...state,
        financialNews: action.payload.financialNews,
        isLoading: action.payload.isLoading,
      };
    case FETCH_FINANCIAL_NEWS_ERROR:
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
