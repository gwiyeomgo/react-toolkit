//TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
import React, { useEffect, useState } from 'react';
//https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html
const Clock = (props) => {
  //매초 UI를 업데이트하는 것은 state
  const [changeDate, setChangeDate] = useState(props.date);
  useEffect(() => {
    const tick = () => setChangeDate(new Date());
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, []);
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, changeDate.toLocaleTimeString()),
  );
};
export { Clock };
