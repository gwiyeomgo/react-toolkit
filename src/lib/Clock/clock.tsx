//TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
import React, { useEffect, useState } from 'react';

export type ClockType = {
  date: Date;
};

//https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html
const Clock = (props: ClockType) => {
  //매초 UI를 업데이트하는 것은 state
  const [changeDate, setChangeDate] = useState(props.date);
  useEffect(() => {
    const tick = () => setChangeDate(new Date());
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <div>
      <h2>{changeDate.toLocaleTimeString()}</h2>
    </div>
  );
};

export { Clock };
