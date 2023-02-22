import React from 'react';
import styles from './Popup.module.scss';

const Popup = ({ status, setShowPopup }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.popup}>
        <div onClick={() => setShowPopup(false)} className={styles.closePopup}></div>
        <h3 className={styles.title}>{`${status.toUpperCase()}!`}</h3>
        <h5 className={styles.subtitle}>
          {status === 'Success'
            ? 'You have successfully subscribed to the email newsletter'
            : 'Please try again later'}
        </h5>
        <button onClick={() => setShowPopup(false)} className="button button_close">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
