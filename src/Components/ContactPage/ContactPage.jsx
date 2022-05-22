import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendContactInfoFunction } from '../../redux/actions/contactActions';
import { TELEGRAM_URL } from '../../URLS/urls';
import './ContactPage_Style.scss';

const ContactPage = () => {
  const dispatch = useDispatch();

  const [emailIsDirty, setEmailIsDirty] = useState('cannot be empty.');
  const [emailIsError, setEmailIsError] = useState(true);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [disabled, setDisabled] = useState(true);

  const [isSuccess, setIsSuccess] = useState('');
  const [onFailure, setOnFailure] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(sendContactInfoFunction({ email, content }))
      .then((res) => {
        setOnFailure('');
        setIsSuccess(res.message);
        setEmail('');
        setContent('');
      })
      .catch((error) => {
        console.log(error);
        setIsSuccess('');
        setOnFailure('Somthing went wrong.. Try later');
      });
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailIsError('is incorrect.');
      if (!e.target.value) {
        setEmailIsError(' cannot be empty.');
      }
    } else {
      setEmailIsError('');
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        console.log('yes');
        return setEmailIsDirty(true);
      // break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (emailIsError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [emailIsError]);

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
            value={email}
            onBlur={blurHandler}
            onChange={onChangeEmail}
          />
          {emailIsError && emailIsDirty && (
            <label className="text">{emailIsError}</label>
          )}
        </div>
        <div className="content__block d-flex justify-center align-center">
          <label className="text">Type your comments</label>
          <textarea
            className="textarea d-flex justify-center align-center"
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          disabled={disabled}
          type="submit"
          className="button__submit"
          onClick={handleSubmit}
        >
          Send your letter!
        </button>
      </form>
      {isSuccess && <div className="success__message">{isSuccess}</div>}
      {onFailure && <div className="failure__message">{onFailure}</div>}
    </div>
  );
};

export default ContactPage;
