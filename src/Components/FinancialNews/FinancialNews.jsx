import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import FinancialNewsItem from './FinancialNewsItem';
import './FinancialNews_Style.scss';

const FinancialNews = ({ isFinancialShown }) => {
  const { financialNews, isLoading, error } = useSelector((state) => state.fin);

  return (
    <div
      className={
        isFinancialShown
          ? 'financialnews__block'
          : 'financialnews__block display__none'
      }
    >
      <span className="title">Latest news</span>
      {!isLoading ? (
        error ? (
          <div className="error__block d-column justify-center align-center">
            <h3>{error}</h3>
          </div>
        ) : (
          financialNews.map((news) => (
            <FinancialNewsItem key={news.link} item={news} />
          ))
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default FinancialNews;
