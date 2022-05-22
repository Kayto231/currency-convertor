import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_PAGE_URL } from '../AppRouter/consts';
import './ErrorPage_Style.scss';

const ErrorPage = () => {
  const { error } = useSelector((state) => state.rate);

  return (
    <div className="error_page__container d-flex justify-center align-center">
      {error ? (
        <>
          <div className="error d-column justify-center align-center">
            <span>Some error appeared while trying to fetch main data</span>
            <span>
              Try to check your internet connection or restart the application
            </span>
            <span>
              Also you can check <Link to={API_PAGE_URL}>api page</Link> to see
              what's the problem can be related to.
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ErrorPage;
