import axios from 'axios';
import { COMMENT_URL } from '../../URLS/urls';
import { SEND_CONTACT_INFO, SEND_CONTACT_INFO_ERROR } from '../consts';

export const sendContactInfoAction = (obj) => ({
  type: SEND_CONTACT_INFO,
  payload: obj,
});
export const sendContactInfoActionError = (obj) => ({
  type: SEND_CONTACT_INFO_ERROR,
  payload: obj,
});

export const sendContactInfoFunction = ({ email, content }) => {
  return async (dispatch) => {
    try {
      const message = { email, content };
      const commentResponse = await axios
        .post(COMMENT_URL, message)
        .then((res) => res.data);

      if (!commentResponse) throw Error();

      dispatch(sendContactInfoAction({ isLoading: false, isSent: true }));
      return new Promise((resolve) =>
        resolve({ message: 'Your comment has been successfully sent.' })
      );
    } catch (error) {
      dispatch(
        sendContactInfoActionError({
          isLoading: false,
          error: 'Something went wrong while sending data.',
        })
      );
      throw new Error();
    }
  };
};
