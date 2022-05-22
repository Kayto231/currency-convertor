import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { apiReducer } from '../reducers/apiReducers';
import { financialNewsReducer } from '../reducers/financialNews';
import { InputReducer } from '../reducers/inputReducer';
import { nbuReducer } from '../reducers/nbuReducer';

export const rootReducer = combineReducers({
  rate: apiReducer,
  input: InputReducer,
  nbu: nbuReducer,
  fin: financialNewsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
