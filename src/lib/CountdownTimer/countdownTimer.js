import * as React from 'react';
import {
  convertStringToDate,
  getFormattedTimeObject,
  yyyyMMddHHmmssRegex,
} from '../Util/convert';
import { useEffect, useState } from 'react';
import useIntervalCall from '../Util/hooks/useIntervalCall';
import styled from 'styled-components';

const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CountdownTimer = ({
  fontSize = '60',
  targetTime,
  type = 'default',
  keyList = ['days', 'hours', 'minutes', 'seconds'],
  suffixList = ['일', '시', '분', '초'],
}) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [time, setTime] = useState({});

  if (!yyyyMMddHHmmssRegex.test(targetTime)) {
    throw new Error('yyyyMMddHHmmss 형식이 아닙니다.');
  }
  const targetDate = targetTime > 0 && convertStringToDate(targetTime);
  const currentDate = new Date();

  const timeDifference = targetDate - currentDate;
  if (timeDifference <= 0) {
    throw new Error('목표 시간이 이미 지났습니다.');
  }

  useIntervalCall(() => setRemainingTime(timeDifference), 1000);

  useEffect(() => {
    setTime(getFormattedTimeObject(remainingTime));
  }, [remainingTime]);

  let totalKeys = keyList.length;
  let allWidth = 100;
  if (type === 'default') {
    allWidth -= 3;
  }
  let widthPercentage = allWidth / totalKeys;

  return (
    <TimerContainer>
      {keyList.map((key, index) => (
        <div key={index}>
          <div
            style={{
              width: `${widthPercentage}%`,
              minWidth: `${fontSize * 1.5}px`,
              textAlign: 'center',
              fontSize: `${fontSize}px`,
            }}
          >
            {time[key]}
            {type === 'suffix' && suffixList.length > 0 && suffixList[index] ? (
              suffixList[index]
            ) : (
              <></>
            )}
          </div>
          {type === 'default' && index !== keyList.length - 1 ? (
            <span style={{ width: '1%', fontSize: `${fontSize}px` }}>
              {':'}
            </span>
          ) : (
            <></>
          )}
        </div>
      ))}
    </TimerContainer>
  );
};

export { CountdownTimer };
