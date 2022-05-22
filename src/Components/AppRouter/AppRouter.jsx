import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { publicRoutes } from './Routes';

const AppRouter = () => {
  const { isLoading } = useSelector((state) => state.rate);
  return (
    <>
      <Routes>
        {!isLoading ? (
          publicRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            );
          })
        ) : (
          <Route path="/" element={<Loader />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
