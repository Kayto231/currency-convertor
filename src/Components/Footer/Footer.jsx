import React from 'react';
import { Link } from 'react-router-dom';
import './Footer_Style.scss';

const Footer = () => {
  return (
    <div className="footer__container d-flex justify-center align-center">
      <ul>
        <li>
          <Link to={'/contact'}>Contacts</Link>
        </li>
        <li>
          <Link to={'/api/help'}>Api</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
