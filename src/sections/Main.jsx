import React, { useEffect } from 'react';
import { Transition } from 'react-transition-group';
import Timer from '../components/Timer';
import Portal from '../components/Popup/Portal';
import Popup from '../components/Popup';
import blobLeft from '../assets/img/left-blob.png';
import blobRight from '../assets/img/right-blob.png';
import logo from '../assets/img/logo.svg';
import arrow from '../assets/img/arrow-right.svg';
import { api } from '../api/api';

const Main = () => {
  const [email, setEmail] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => setIsVisible(true), []);

  const onSubmit = async (email, e) => {
    e.preventDefault();
    try {
      const result = await api.sendEmail(email);
      result.ok ? setStatus('Success') : setStatus('Error');
    } catch {
      setStatus('Error');
    } finally {
      setShowPopup(true);
    }
  };

  const goToEvents = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div className="container">
      <Transition in={isVisible} timeout={1000}>
        {(state) => (
          <>
            <img src={blobLeft} className={`blob  ${state} blob_left`} alt="blob" />
            <img className={`blob ${state} blob_right`} src={blobRight} alt="blob" />
          </>
        )}
      </Transition>
      <div className="content">
        <Transition in={isVisible} timeout={200}>
          {(state) => (
            <a href="/">
              <img src={logo} alt={logo} className={`logo ${state}`} />
            </a>
          )}
        </Transition>
        <Transition in={isVisible} timeout={600}>
          {(state) => (
            <>
              <h2 className={`title ${state}`}>Under Construction</h2>
              <h3 className={`subtitle ${state}`}>
                We're making lots of improvements and will be back soon
              </h3>
            </>
          )}
        </Transition>
        <Transition in={isVisible} timeout={1000}>
          {(state) => (
            <>
              <div className={`timer__wrapper ${state}`}>
                <Timer />
              </div>
              <h3 className={`subtitle ${state}`}>Check our event page when you wait:</h3>
            </>
          )}
        </Transition>
        <Transition in={isVisible} timeout={1400}>
          {(state) => (
            <a className={`button_event__wrapper ${state}`} href="https://egorovagency.by/#main">
              <button className="button button_event">
                <h3 className="button">Go to the event</h3>
                <img src={arrow} alt="arrow" />
              </button>
            </a>
          )}
        </Transition>
      </div>
      <div className="underside">
        <form onSubmit={(e) => onSubmit({ email: '22ew.com' }, e)}>
          <input
            required={true}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            placeholder="Enter your Email and get notified"
          />
          <button type="submit">
            <img src={arrow} alt="arrow" />
          </button>
        </form>
        <div onClick={goToEvents} className="other">
          <h4 className="other__text">Other Events</h4>
          <img className="other__img" src={arrow} alt="arrow" />
        </div>
      </div>
      {showPopup && (
        <Portal>
          <Popup status={status} setShowPopup={setShowPopup} />
        </Portal>
      )}
    </div>
  );
};

export default Main;
