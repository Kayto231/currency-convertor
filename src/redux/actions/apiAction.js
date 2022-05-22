import axios from 'axios';
import { RATES_URL } from '../../URLS/urls';
import { FETCH_CURRENCIES_ERROR, FETCH_CURRENCIES_SUCCESS } from '../consts';

export const fetchApiCurrenciesAction = (obj) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: obj,
});
export const fetchApiCurrenciesErrorAction = (obj) => ({
  type: FETCH_CURRENCIES_ERROR,
  payload: obj,
});

export const fetchApiCurrenciesFunction = () => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        const ratesResponse = await axios
          .get(RATES_URL)
          .then((res) => res.data);

        dispatch(
          fetchApiCurrenciesAction({
            rates: ratesResponse.rates,
            ratesList: Object.keys(ratesResponse.rates),
            isLoading: false,
          })
        );
      } catch (error) {
        dispatch(
          fetchApiCurrenciesErrorAction({
            error: 'Something went wrong while fetching data',
            isLoading: false,
          })
        );
      }
    }, 1500);
  };
};
