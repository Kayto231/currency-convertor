import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TELEGRAM_URL } from '../../URLS/urls';
import './ContactPage_Style.scss';

const ContactPage = () => {
  const [emailIsDirty, setEmailIsDirty] = useState(false);
  const [contentIsDirty, setIsContentDirty] = useState(false);
  const [emailIsError, setEmailIsError] = useState(false);
  const [contentIsError, setContentIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [content, seContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contactPage__container d-column justify-center align-center">
      <div className="contact__block d-column">
        <span className="span__item">
          You can find me in{' '}
          <a href={TELEGRAM_URL} target={'_blank'} rel="noreferrer">
            telegram
          </a>
        </span>
        <span className="span__item">
          Or you can write me on{' '}
          <a
            href="mailto:oleksiym81@icloud.com"
            target={'_blank'}
            rel="noreferrer"
          >
            email
          </a>{' '}
          or fill the form below
        </span>
      </div>
      <form className="form d-column justify-center align-center" action="#">
        <div className="email__block d-flex justify-center align-center">
          <label className="text">Email:</label>
          <input
            placeholder="Type your email"
            className="input d-flex"
            type="text"
            name="email"
          />
        </div>
        <div className="content__block d-flex justify-center align-center">
          <label className="text">Type your comments</label>
          <textarea
            className="textarea d-flex justify-center align-center"
            type="text"
            name="content"
          />
        </div>
        <button type="submit" className="button__submit" onClick={handleSubmit}>
          Send your letter!
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
