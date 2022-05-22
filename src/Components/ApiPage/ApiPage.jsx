import React from 'react';
import { Link } from 'react-router-dom';
import { FINANCIAL_NEWS_URL, NBU_RATES_URL, RATES_URL } from '../../URLS/urls';
import { CONTACT_PAGE_URL } from '../AppRouter/consts';
import './ApiPage_Style.scss';
const ApiPage = () => {
  return (
    <div className="apiPage__container d-column align-center">
      <div className="help__block">
        <h2>Help block</h2>
        <ul className="ul">
          <p>
            If you have got any problems with loading of currencies here are
            following reasons why this could happen:
          </p>
          <li className="li__item">
            <span>1.Bad internet connection.</span>
          </li>
          <li className="li__item">
            <span>
              2.Api that is used to fetch currencies is not available at the
              moment.
            </span>
          </li>
          <h2>What to do?</h2>
          <li className="li__item">
            <span>1.You may try to reload the app</span>
          </li>
          <li className="li__item">
            <span>
              2.Check your internet connection. It might appear to be offline.
            </span>
          </li>
          <p>If nothing helped:</p>
          <li className="li__item">
            <span>
              Then contact me on <Link to={CONTACT_PAGE_URL}>this page.</Link>
            </span>
          </li>
        </ul>
      </div>
      <div className="api__block">
        <h2>Api block</h2>
        <ul className="ul">
          <p>The list of API that is used in app</p>
          <li className="li__item">
            <span>
              Public{' '}
              <a href={RATES_URL} target={'_blank'} rel="noreferrer">
                api
              </a>{' '}
              to fetch information about currencies
            </span>
          </li>
          <li className="li__item">
            <span>
              Public{' '}
              <a href={NBU_RATES_URL} target={'_blank'} rel="noreferrer">
                api
              </a>{' '}
              to additionaly fetch information about currencies from{' '}
              <a href="https://bank.gov.ua/" target={'_blank'} rel="noreferrer">
                NBU
              </a>
            </span>
          </li>
          <li className="li__item">
            <span>
              Financial{' '}
              <a href={FINANCIAL_NEWS_URL} target={'_blank'} rel="noreferrer">
                api
              </a>{' '}
              to show news.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ApiPage;
