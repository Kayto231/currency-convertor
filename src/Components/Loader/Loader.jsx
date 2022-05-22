import React from 'react';
import './Loader_Style.scss';

const Loader = () => {
  return (
    <div className="loader d-column justify-center align-center">
      <h2>Fetching some data. Please wait!</h2>
      <div className="lds-ripple ">
        <div className="first"></div>
        <div className="second"></div>
      </div>
    </div>
  );
};

export default Loader;
