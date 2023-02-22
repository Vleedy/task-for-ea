import React, { useEffect, useState } from 'react';
import { getTimeUnits } from './getTimeUnits';
import timeUnitImg from '../../assets/img/time-unit.png';
import styles from './Timer.module.scss';

const date = new Date('2023-05-31T00:00:00'); // указанная дата

const Timer = () => {
  const finishTime = date.getTime();
  const [tick, setTick] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [timerId, setTimerID] = useState(0);
  const timeUnits = getTimeUnits(finishTime);
  const timer =
    window.innerWidth < 913 ? ['DD', 'HH', 'MM', 'SS'] : ['Days', 'Hours', 'Minutes', 'Seconds'];

  useEffect(() => {
    if (isTimeout) clearInterval(timerId);
  }, [isTimeout]);

  useEffect(() => {
    if (!timeUnits) {
      setIsTimeout(true);
    }
    const timerID = setInterval(() => {
      setTick(!tick);
    }, 1000);
    setTimerID(timerID);

    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <div className={styles.wrapper}>
      <h1>
        {timeUnits
          ? `${timeUnits.days} : ${timeUnits.hours
              .toString()
              .padStart(2, '0')} : ${timeUnits.minutes
              .toString()
              .padStart(2, '0')} : ${timeUnits.seconds.toString().padStart(2, '0')}`
          : '00 : 00 : 00 : 00'}
      </h1>
      <div className={styles.time_units}>
        {timer.map((item) => (
          <div key={item} className={styles.unit}>
            <img className={styles.unit_img} src={timeUnitImg} alt={item} />
            <h4 className={styles.unit_name}>{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
