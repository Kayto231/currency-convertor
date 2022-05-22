import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiCurrenciesFunction } from './redux/actions/apiAction';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter/AppRouter';
import { fetchNbuRatesFunction } from './redux/actions/nbuActions';
import { fetchFinancialNewsFunction } from './redux/actions/financialNewsActions';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.rate);
  const { nbuRates } = useSelector((state) => state.nbu);

  console.log(nbuRates);
  useEffect(() => {
    dispatch(fetchApiCurrenciesFunction());
    dispatch(fetchNbuRatesFunction());
    dispatch(fetchFinancialNewsFunction());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
