import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrencyLayout from '../CurrencyLayout/CurrencyLayout';
import ErrorPage from '../ErrorPage/ErrorPage';
import FinancialNews from '../FinancialNews/FinancialNews';
import './CombinePages_Style.scss';

const CombinePages = () => {
  const { error } = useSelector((state) => state.rate);
  const [isFinancialNewsShown, setIsFinancialNewsShown] = useState(false);

  return (
    <div className="combinepages__container d-column justify-center align-center">
      <div className="combinepages d-flex justify-center">
        {error ? (
          <ErrorPage />
        ) : (
          <>
            <button
              onClick={() => setIsFinancialNewsShown(!isFinancialNewsShown)}
              className="mobile__financial__button d-flex justify-center align-center"
            >
              Show news
            </button>
            <CurrencyLayout isFinancialShown={isFinancialNewsShown} />
            <FinancialNews isFinancialShown={isFinancialNewsShown} />
          </>
        )}
      </div>
    </div>
  );
};

export default CombinePages;
