import React, { useEffect, useState } from 'react';
import styles from '../styles.module.css';
const AnalogClock = () => {
  const [rotations, setRotation] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  useEffect(() => {
    const tick = () => {
      const d = new Date(); //object of date()
      const hr = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      const hr_rotation = 30 * hr + min / 2; //converting current time
      const min_rotation = 6 * min;
      const sec_rotation = 6 * sec;
      setRotation({
        hour: hr_rotation,
        minute: min_rotation,
        second: sec_rotation,
      });
    };
    tick();
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, []);
  return React.createElement(
    'div',
    { className: styles.clockContainer },
    React.createElement('div', {
      className: styles.hour,
      style: { transform: `rotate(${rotations.hour}deg)` },
    }),
    React.createElement('div', {
      className: styles.minute,
      style: { transform: `rotate(${rotations.minute}deg)` },
    }),
    React.createElement('div', {
      className: styles.second,
      style: { transform: `rotate(${rotations.second}deg)` },
    }),
  );
};
export { AnalogClock };
