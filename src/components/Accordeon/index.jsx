import React from 'react';
import accordeon1 from '../../assets/img/accordeon1.jpg';
import accordeon2 from '../../assets/img/accordeon2.jpg';
import accordeon3 from '../../assets/img/accordeon3.jpg';
import accordeon4 from '../../assets/img/accordeon4.jpg';
import accordeon5 from '../../assets/img/accordeon5.jpg';
import accordeon6 from '../../assets/img/accordeon6.jpg';
import accordeon7 from '../../assets/img/accordeon7.jpg';
import accordeon8 from '../../assets/img/accordeon8.jpg';
import styles from './Accordeon.module.scss';

const accordeonItems = [
  { image: accordeon1, name: 'Havaiian party', date: '13.02.2023' },
  { image: accordeon2, name: 'Mafia party', date: '13.02.2023' },
  { image: accordeon3, name: 'Party', date: '13.02.2023' },
  { image: accordeon4, name: 'Party on the beach', date: '13.02.2023' },
  { image: accordeon5, name: 'Home Security', date: '13.02.2023' },
  { image: accordeon6, name: 'Network Design & Implementation', date: '13.02.2023' },
  { image: accordeon7, name: 'System Design & Engineering', date: '13.02.2023' },
  { image: accordeon8, name: 'Client Care Plans', date: '13.02.2023' },
];

const Accordeon = () => {
  const [active, setActive] = React.useState(0);

  return (
    <ul className={styles.container}>
      {accordeonItems.map((item, i) => (
        <li className={active === i ? styles.wrapper_active : styles.wrapper} key={i}>
          <div
            onClick={() => setActive(i)}
            className={active === i ? styles.preview_active : styles.preview}>
            <div className={active !== i ? styles.preview__mask : null}></div>
            <img
              className={active === i ? styles.preview__image_active : styles.preview__image}
              src={item.image}
              alt="event-preview"
            />
            <h3 className={styles.preview__name}>{item.name}</h3>
            <h3 className={styles.preview__number}>{(i + 1).toString().padStart(2, 0)}</h3>
          </div>
          <div className={styles.info}>
            <div className={styles.number}>{(i + 1).toString().padStart(2, 0)}</div>
            <h4 className={styles.name}>{item.name}</h4>
            <h5 className={styles.date}>{item.date}</h5>
            <button className={styles.moreInfo}>More information</button>
          </div>
          <img className={styles.image} src={item.image} alt="event-img" />
        </li>
      ))}
    </ul>
  );
};

export default Accordeon;
