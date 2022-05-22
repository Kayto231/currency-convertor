import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { onChangeCurrentCurrency1 } from '../../redux/actions/inputAcions';
import { publicRoutes } from '../AppRouter/Routes';
import './NavBar_Style.scss';

const NavBar = () => {
  const { rates, error, isLoading } = useSelector((state) => state.rate);
  const [isOpenedBar, setIsOpenedBar] = useState(false);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(publicRoutes.filter((route) => route.link !== 'Error'));
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(e) {
    const target = e.target.getAttribute('name');
    switch (target) {
      case 'EUR':
        return dispatch(onChangeCurrentCurrency1('EUR'));
      case 'USD':
        return dispatch(onChangeCurrentCurrency1('USD'));
      default:
        return null;
    }
  }

  return (
    <div className="navbar__container d-flex justify-center align-center">
      <div
        onClick={() => navigate('/')}
        className="navbar__title d-flex justify-center align-center"
      >
        Currency Convertor
      </div>
      <div className="currencies d-flex">
        {error ? (
          <span className="error__fetch d-flex justify-center align-center">
            Data failed to be fetched
          </span>
        ) : (
          <>
            {!isLoading ? (
              <>
                {' '}
                <span
                  onClick={handleClick}
                  name="EUR"
                  className="currencyItem d-flex justify-center align-center"
                >{`EUR/UAH: ${rates['UAH']?.toFixed(2)} `}</span>
                <span
                  onClick={handleClick}
                  name="USD"
                  className="currencyItem d-flex justify-center align-center"
                >
                  {`USD/UAH: ${((1 * rates['UAH']) / rates['USD'])?.toFixed(
                    2
                  )} `}
                </span>{' '}
              </>
            ) : (
              <span className="error__fetch">Data is fetching</span>
            )}
          </>
        )}
      </div>
      <div
        className={
          isOpenedBar ? 'opened d-column menu__tab' : 'menu d-column menu__tab'
        }
        onClick={() => setIsOpenedBar(!isOpenedBar)}
      >
        <span
          className={
            isOpenedBar ? 'menu__button d-column none' : 'menu__button d-column'
          }
        ></span>
        <div
          className={
            isOpenedBar ? 'dropdown__menu d-column' : 'dropdown__menu none'
          }
        >
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="dropdown__item d-flex justify-center align-center"
            >
              {route.link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
