import axios from 'axios';
import { NBU_RATES_URL } from '../../URLS/urls';
import { FETCH_NBU_CURRENCIES, FETCH_NBU_CURRENCIES_ERROR } from '../consts';

export const fetchNbuRatesAction = (obj) => ({
  type: FETCH_NBU_CURRENCIES,
  payload: obj,
});
export const fetchNbuRatesErrorAction = (obj) => ({
  type: FETCH_NBU_CURRENCIES_ERROR,
  payload: obj,
});

export const fetchNbuRatesFunction = () => {
  return async (dispatch) => {
    try {
      const nbuRates = await axios.get(NBU_RATES_URL).then((res) => res.data);
      const filteredRates = nbuRates.filter((rate) =>
        rate.cc === 'USD' || rate.cc === 'EUR' ? rate : null
      );
      dispatch(
        fetchNbuRatesAction({ nbuRates: filteredRates, isLoading: false })
      );
    } catch (error) {
      dispatch(
        fetchNbuRatesErrorAction({
          isLoading: false,
          error: 'Something went wrong while fetching data',
        })
      );
    }
  };
};
