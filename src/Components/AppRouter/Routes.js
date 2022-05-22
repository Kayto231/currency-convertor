import ApiPage from '../ApiPage/ApiPage';
import CombinePages from '../CombinePages/CombinePages';
import ContactPage from '../ContactPage/ContactPage';
import {
  API_PAGE_URL,
  CONTACT_PAGE_URL,
  CURRENCY_PATH,
  ERROR_PAGE_PATH,
} from './consts';

export const publicRoutes = [
  {
    path: CURRENCY_PATH,
    element: CombinePages,
    link: 'Main',
  },
  {
    path: ERROR_PAGE_PATH,
    element: CombinePages,
    link: 'Error',
  },
  {
    path: API_PAGE_URL,
    element: ApiPage,
    link: 'ApiPage',
  },
  {
    path: CONTACT_PAGE_URL,
    element: ContactPage,
    link: 'Contact me',
  },
];
