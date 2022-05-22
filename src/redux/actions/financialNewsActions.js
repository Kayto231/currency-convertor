import axios from 'axios';
import { FINANCIAL_NEWS_URL } from '../../URLS/urls';
import { FETCH_FINANCIAL_NEWS, FETCH_FINANCIAL_NEWS_ERROR } from '../consts';

export const fetchFinancialNewsAction = (obj) => ({
  type: FETCH_FINANCIAL_NEWS,
  payload: obj,
});
export const fetchFinancialNewsErrorAction = (obj) => ({
  type: FETCH_FINANCIAL_NEWS_ERROR,
  payload: obj,
});

export const fetchFinancialNewsFunction = () => {
  return async (dispatch) => {
    try {
      const financialNews = await axios
        .get(FINANCIAL_NEWS_URL)
        .then((res) => res.data);

      setTimeout(
        () =>
          dispatch(
            fetchFinancialNewsAction({
              financialNews: financialNews,
              isLoading: false,
            })
          ),
        4000
      );
    } catch (error) {
      dispatch(
        fetchFinancialNewsErrorAction({
          isLoading: false,
          error: 'Something went wrong while fetching data',
        })
      );
    }
  };
};
