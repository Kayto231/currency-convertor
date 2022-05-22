import { SEND_CONTACT_INFO, SEND_CONTACT_INFO_ERROR } from '../consts';

const initialState = {
  isSent: false,
  isLoading: true,
  error: '',
};

export const nbuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_CONTACT_INFO:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isSent: action.payload.isSent,
      };
    case SEND_CONTACT_INFO_ERROR:
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
